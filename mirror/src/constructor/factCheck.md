---
title: "factCheck"
original: "https://core.telegram.org/constructor/factCheck"
section: ref
description: "Represents a fact-check » created by an independent fact-checker."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"factCheck","url":"/constructor/factCheck/"}]
layout: layout.njk
---

# factCheck

Represents a [fact-check »](/api/factcheck/) created by an independent fact-checker.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/factCheck/" class="current_page_link">factCheck</a>#b89bfccf flags:<a href="/type/%23/">#</a> need_check:flags.0?true country:flags.1?<a href="/type/string/">string</a> text:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> hash:<a href="/type/long/">long</a> = <a href="/type/FactCheck/">FactCheck</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>need_check</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the <code>country</code>/<code>text</code> fields will <strong>not</strong> be set, and the fact check must be fetched manually by the client (if it isn't already cached with the key specified in <code>hash</code>) using bundled <a href="/method/messages.getFactCheck/">messages.getFactCheck</a> requests, when the message with the factcheck scrolls into view.</td></tr><tr><td><strong>country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>A two-letter ISO 3166-1 alpha-2 country code of the country for which the fact-check should be shown.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The fact-check.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Type

[FactCheck](/type/FactCheck/)

### Related pages

#### [messages.getFactCheck](/method/messages.getFactCheck/)

Fetch one or more [factchecks, see here »](/api/factcheck/) for the full flow.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Fact checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
