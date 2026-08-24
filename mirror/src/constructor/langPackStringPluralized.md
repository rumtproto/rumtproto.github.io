---
title: "langPackStringPluralized"
original: "https://core.telegram.org/constructor/langPackStringPluralized"
section: ref
description: "A language pack string which has different forms based on the number of some object it mentions. See…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"langPackStringPluralized","url":"/constructor/langPackStringPluralized/"}]
layout: layout.njk
---

# langPackStringPluralized

A language pack string which has different forms based on the number of some object it mentions. See [https://www.unicode.org/cldr/charts/latest/supplemental/language\_plural\_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) for more info

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackStringPluralized/" class="current_page_link">langPackStringPluralized</a>#6c47ac9f flags:<a href="/type/%23/">#</a> key:<a href="/type/string/">string</a> zero_value:flags.0?<a href="/type/string/">string</a> one_value:flags.1?<a href="/type/string/">string</a> two_value:flags.2?<a href="/type/string/">string</a> few_value:flags.3?<a href="/type/string/">string</a> many_value:flags.4?<a href="/type/string/">string</a> other_value:<a href="/type/string/">string</a> = <a href="/type/LangPackString/">LangPackString</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Localization key</td></tr><tr><td><strong>zero_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Value for zero objects</td></tr><tr><td><strong>one_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Value for one object</td></tr><tr><td><strong>two_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Value for two objects</td></tr><tr><td><strong>few_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Value for a few objects</td></tr><tr><td><strong>many_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Value for many objects</td></tr><tr><td><strong>other_value</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Default value</td></tr></tbody></table>

### Type

[LangPackString](/type/LangPackString/)
