type Theme = "auto" | "light" | "dark";

try {
  const theme = localStorage.getItem("theme");
  if (theme === "light" || theme === "dark")
    document.documentElement.dataset.theme = theme;
} catch {
  // Storage can be unavailable in privacy modes; system theme remains usable.
}

function markMedia(
  target: EventTarget | null,
  state: "img-ok" | "img-broken",
): void {
  if (!(target instanceof Element)) return;
  target.closest(".img-box")?.classList.add(state);
}

document.addEventListener(
  "load",
  (event) => {
    if (event.target instanceof HTMLImageElement)
      markMedia(event.target, "img-ok");
  },
  true,
);
document.addEventListener(
  "loadeddata",
  (event) => {
    if (event.target instanceof HTMLVideoElement)
      markMedia(event.target, "img-ok");
  },
  true,
);
document.addEventListener(
  "error",
  (event) => {
    if (
      event.target instanceof HTMLImageElement ||
      event.target instanceof HTMLVideoElement ||
      event.target instanceof HTMLSourceElement
    ) {
      markMedia(event.target, "img-broken");
    }
  },
  true,
);
