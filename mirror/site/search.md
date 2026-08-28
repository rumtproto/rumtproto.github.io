---
title: "Search"
original: "https://core.telegram.org"
section: site
description: "Full-text search over every section of the Telegram documentation mirror, with visible section filters and paginated results."
generated: true
layout: layout.njk
---

# Search

Search the whole mirror: articles, constructors, methods and types. Results are divided into pages; no matches are omitted.

<form class="docs-search" id="docs-search" role="search">
<label class="visually-hidden" for="docs-search-query">Search documentation</label>
<div class="docs-search-query-row">
<input id="docs-search-query" name="q" type="search" placeholder="Search the mirror" autocomplete="off" spellcheck="false">
<button class="docs-search-submit" type="submit">Search</button>
<button class="docs-search-clear" type="button" hidden>Clear</button>
</div>
<fieldset class="docs-search-sections">
<legend>Sections <span>optional, select one or more</span></legend>
<div class="docs-search-section-grid">
<label><input type="checkbox" name="section" value="Telegram API"><span>Telegram API</span></label>
<label><input type="checkbox" name="section" value="Bot API"><span>Bot API</span></label>
<label><input type="checkbox" name="section" value="MTProto"><span>MTProto</span></label>
<label><input type="checkbox" name="section" value="Schema"><span>Schema</span></label>
<label><input type="checkbox" name="section" value="Blog"><span>Blog</span></label>
<label><input type="checkbox" name="section" value="FAQ"><span>FAQ</span></label>
<label><input type="checkbox" name="section" value="Apps &amp; Clients"><span>Apps &amp; Clients</span></label>
<label><input type="checkbox" name="section" value="Contests"><span>Contests</span></label>
<label><input type="checkbox" name="section" value="Developer Tools"><span>Developer Tools</span></label>
<label><input type="checkbox" name="section" value="Policies"><span>Policies</span></label>
<label><input type="checkbox" name="section" value="Other"><span>Other</span></label>
</div>
</fieldset>
</form>

<div class="docs-search-feedback">
<p id="docs-search-status" role="status" aria-live="polite" tabindex="-1">Loading search…</p>
</div>
<div id="docs-search-results" class="docs-search-results" aria-live="off"></div>
<nav id="docs-search-pagination" class="docs-search-pagination" aria-label="Search result pages" hidden>
<button type="button" data-page-action="previous">Previous</button>
<ol></ol>
<button type="button" data-page-action="next">Next</button>
</nav>
<noscript><p class="search-error">Search requires JavaScript. The rest of the mirror remains fully accessible without it.</p></noscript>
