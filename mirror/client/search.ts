interface PagefindResultData {
  url: string;
  meta?: { title?: string };
  plain_excerpt?: string;
  excerpt?: string;
}

interface PagefindRawResult {
  data(): Promise<PagefindResultData>;
}

interface PagefindResponse {
  results: PagefindRawResult[];
}

interface PagefindApi {
  search(
    term: string,
    options?: { filters?: { section?: { any: string[] } } },
  ): Promise<PagefindResponse>;
}

const PAGE_SIZE = 20;
const pagefindPath = "/pagefind/pagefind.js";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector<HTMLFormElement>("#docs-search");
  const input = document.querySelector<HTMLInputElement>("#docs-search-query");
  const clear = document.querySelector<HTMLButtonElement>(".docs-search-clear");
  const status = document.querySelector<HTMLElement>("#docs-search-status");
  const results = document.querySelector<HTMLElement>("#docs-search-results");
  const pagination = document.querySelector<HTMLElement>(
    "#docs-search-pagination",
  );
  const pageList = pagination?.querySelector<HTMLOListElement>("ol");
  const sectionInputs = Array.from(
    document.querySelectorAll<HTMLInputElement>(
      '.docs-search-sections input[name="section"]',
    ),
  );
  if (
    !form ||
    !input ||
    !clear ||
    !status ||
    !results ||
    !pagination ||
    !pageList
  )
    return;

  let pagefindPromise: Promise<PagefindApi> | undefined;
  let currentPage = 1;
  let requestId = 0;
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;
  let searchQueue: Promise<void> = Promise.resolve();

  const loadPagefind = (): Promise<PagefindApi> => {
    pagefindPromise ??= import(pagefindPath) as Promise<PagefindApi>;
    return pagefindPromise;
  };

  const searchPagefind = (
    pagefind: PagefindApi,
    term: string,
    sections: string[],
  ): Promise<PagefindResponse> => {
    const queued = searchQueue.then(() =>
      pagefind.search(term, {
        filters: sections.length ? { section: { any: sections } } : undefined,
      }),
    );
    searchQueue = queued.then(
      () => undefined,
      () => undefined,
    );
    return queued;
  };

  const selectedSections = (): string[] =>
    sectionInputs
      .filter((checkbox) => checkbox.checked)
      .map(({ value }) => value);

  const cleanText = (value: string): string =>
    value.replaceAll("¶", " ").replace(/\s+/g, " ").trim();

  const appendHighlighted = (
    container: HTMLElement,
    text: string,
    term: string,
  ): void => {
    const normalized = cleanText(text);
    const needle = term.trim().toLocaleLowerCase();
    if (!needle) {
      container.textContent = normalized;
      return;
    }
    const lower = normalized.toLocaleLowerCase();
    let cursor = 0;
    let index = lower.indexOf(needle);
    while (index >= 0) {
      container.append(normalized.slice(cursor, index));
      const mark = document.createElement("mark");
      mark.textContent = normalized.slice(index, index + needle.length);
      container.append(mark);
      cursor = index + needle.length;
      index = lower.indexOf(needle, cursor);
    }
    container.append(normalized.slice(cursor));
  };

  const safeResultUrl = (value: string): string => {
    try {
      const url = new URL(value, location.origin);
      return url.origin === location.origin
        ? `${url.pathname}${url.search}${url.hash}`
        : "#";
    } catch {
      return "#";
    }
  };

  const updateUrl = (): void => {
    const url = new URL(location.href);
    const query = input.value.trim();
    url.search = "";
    if (query) url.searchParams.set("q", query);
    for (const section of selectedSections())
      url.searchParams.append("section", section);
    if (currentPage > 1) url.searchParams.set("page", String(currentPage));
    history.replaceState(null, "", url);
  };

  const pageNumbers = (page: number, total: number): Array<number | "gap"> => {
    const visible = new Set([1, total, page - 1, page, page + 1]);
    const ordered = [...visible]
      .filter((value) => value >= 1 && value <= total)
      .sort((a, b) => a - b);
    const output: Array<number | "gap"> = [];
    for (const value of ordered) {
      const previous = output.at(-1);
      if (typeof previous === "number" && value - previous > 1)
        output.push("gap");
      output.push(value);
    }
    return output;
  };

  const renderPagination = (totalResults: number): void => {
    const totalPages = Math.ceil(totalResults / PAGE_SIZE);
    pagination.hidden = totalPages <= 1;
    pageList.replaceChildren();
    const previous = pagination.querySelector<HTMLButtonElement>(
      '[data-page-action="previous"]',
    );
    const next = pagination.querySelector<HTMLButtonElement>(
      '[data-page-action="next"]',
    );
    if (previous) previous.disabled = currentPage <= 1;
    if (next) next.disabled = currentPage >= totalPages;
    for (const value of pageNumbers(currentPage, totalPages)) {
      const item = document.createElement("li");
      if (value === "gap") {
        item.className = "pagination-gap";
        item.textContent = "…";
        item.setAttribute("aria-hidden", "true");
      } else {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.page = String(value);
        button.textContent = String(value);
        button.setAttribute("aria-label", `Page ${value}`);
        if (value === currentPage) button.setAttribute("aria-current", "page");
        item.append(button);
      }
      pageList.append(item);
    }
  };

  const renderResult = (
    data: PagefindResultData,
    term: string,
  ): HTMLElement => {
    const card = document.createElement("article");
    card.className = "docs-search-result";
    const heading = document.createElement("h2");
    const link = document.createElement("a");
    link.href = safeResultUrl(data.url);
    appendHighlighted(link, data.meta?.title || data.url, term);
    heading.append(link);
    const path = document.createElement("p");
    path.className = "docs-search-result-path";
    path.textContent = safeResultUrl(data.url);
    const excerpt = document.createElement("p");
    excerpt.className = "docs-search-result-excerpt";
    appendHighlighted(excerpt, data.plain_excerpt || data.excerpt || "", term);
    card.append(heading, path, excerpt);
    return card;
  };

  const runSearch = async ({ moveFocus = false } = {}): Promise<void> => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = undefined;
    const term = input.value.trim();
    clear.hidden = !term;
    if (!term) {
      requestId += 1;
      currentPage = 1;
      results.replaceChildren();
      status.textContent = "Enter a search term.";
      pagination.hidden = true;
      updateUrl();
      return;
    }

    const ownRequest = ++requestId;
    status.textContent = "Searching…";
    status.classList.remove("search-error");
    results.setAttribute("aria-busy", "true");
    pagination.hidden = true;
    try {
      const pagefind = await loadPagefind();
      const sections = selectedSections();
      const response = await searchPagefind(pagefind, term, sections);
      if (ownRequest !== requestId) return;
      const total = response.results.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      currentPage = Math.min(Math.max(currentPage, 1), totalPages);
      const start = (currentPage - 1) * PAGE_SIZE;
      const data = await Promise.all(
        response.results
          .slice(start, start + PAGE_SIZE)
          .map((result) => result.data()),
      );
      if (ownRequest !== requestId) return;
      results.replaceChildren(...data.map((item) => renderResult(item, term)));
      results.removeAttribute("aria-busy");
      if (!total) {
        status.textContent = `No results for “${term}”.`;
        pagination.hidden = true;
      } else {
        const first = start + 1;
        const last = Math.min(start + PAGE_SIZE, total);
        status.textContent = `Showing ${first}–${last} of ${total} results.`;
        renderPagination(total);
      }
      updateUrl();
      if (moveFocus) {
        status.focus({ preventScroll: true });
        status.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } catch (error) {
      if (ownRequest !== requestId) return;
      results.removeAttribute("aria-busy");
      results.replaceChildren();
      pagination.hidden = true;
      status.textContent =
        error instanceof Error
          ? `Search could not load: ${error.message}`
          : "Search could not load. Please reload the page.";
      status.classList.add("search-error");
    }
  };

  const restoreFromUrl = (): void => {
    const params = new URLSearchParams(location.search);
    input.value = params.get("q") ?? "";
    const sections = new Set(params.getAll("section"));
    for (const checkbox of sectionInputs)
      checkbox.checked = sections.has(checkbox.value);
    const page = Number.parseInt(params.get("page") ?? "1", 10);
    currentPage = Number.isSafeInteger(page) && page > 0 ? page : 1;
    void runSearch();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    currentPage = 1;
    void runSearch({ moveFocus: true });
  });
  input.addEventListener("input", () => {
    clear.hidden = !input.value;
    currentPage = 1;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => void runSearch(), 250);
  });
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
    void runSearch();
  });
  for (const checkbox of sectionInputs)
    checkbox.addEventListener("change", () => {
      currentPage = 1;
      void runSearch();
    });
  pagination.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>(
      "button",
    );
    if (!button || button.disabled) return;
    const requested = Number.parseInt(button.dataset.page ?? "", 10);
    if (Number.isSafeInteger(requested)) currentPage = requested;
    else if (button.dataset.pageAction === "previous") currentPage -= 1;
    else if (button.dataset.pageAction === "next") currentPage += 1;
    else return;
    void runSearch({ moveFocus: true });
  });
  window.addEventListener("popstate", restoreFromUrl);
  restoreFromUrl();
});
