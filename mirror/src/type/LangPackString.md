---
title: "LangPackString"
original: "https://core.telegram.org/type/LangPackString"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"LangPackString","url":"/type/LangPackString/"}]
layout: layout.njk
---

# LangPackString

Language pack string

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackString/">langPackString</a>#cad181f6 key:<a href="/type/string/">string</a> value:<a href="/type/string/">string</a> = <a href="/type/LangPackString/" class="current_page_link">LangPackString</a>;
<a href="/constructor/langPackStringPluralized/">langPackStringPluralized</a>#6c47ac9f flags:<a href="/type/%23/">#</a> key:<a href="/type/string/">string</a> zero_value:flags.0?<a href="/type/string/">string</a> one_value:flags.1?<a href="/type/string/">string</a> two_value:flags.2?<a href="/type/string/">string</a> few_value:flags.3?<a href="/type/string/">string</a> many_value:flags.4?<a href="/type/string/">string</a> other_value:<a href="/type/string/">string</a> = <a href="/type/LangPackString/" class="current_page_link">LangPackString</a>;
<a href="/constructor/langPackStringDeleted/">langPackStringDeleted</a>#2979eeb2 key:<a href="/type/string/">string</a> = <a href="/type/LangPackString/" class="current_page_link">LangPackString</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/langPackString/">langPackString</a></td><td>Translated localization string</td></tr><tr><td><a href="/constructor/langPackStringPluralized/">langPackStringPluralized</a></td><td>A language pack string which has different forms based on the number of some object it mentions. See <a href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a> for more info</td></tr><tr><td><a href="/constructor/langPackStringDeleted/">langPackStringDeleted</a></td><td>Deleted localization string</td></tr></tbody></table>
