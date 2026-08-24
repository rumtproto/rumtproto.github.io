---
title: "FactCheck"
original: "https://core.telegram.org/type/FactCheck"
section: ref
description: "Represents a fact-check » created by an independent fact-checker."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"FactCheck","url":"/type/FactCheck/"}]
layout: layout.njk
---

# FactCheck

Represents a [fact-check »](/api/factcheck/) created by an independent fact-checker.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/factCheck/">factCheck</a>#b89bfccf flags:<a href="/type/%23/">#</a> need_check:flags.0?true country:flags.1?<a href="/type/string/">string</a> text:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> hash:<a href="/type/long/">long</a> = <a href="/type/FactCheck/" class="current_page_link">FactCheck</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/factCheck/">factCheck</a></td><td>Represents a <a href="/api/factcheck/">fact-check »</a> created by an independent fact-checker.</td></tr></tbody></table>

### Related pages

#### [Fact checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
