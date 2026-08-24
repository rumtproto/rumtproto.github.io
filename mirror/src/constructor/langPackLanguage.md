---
title: "langPackLanguage"
original: "https://core.telegram.org/constructor/langPackLanguage"
section: ref
description: "Identifies a localization pack"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"langPackLanguage","url":"/constructor/langPackLanguage/"}]
layout: layout.njk
---

# langPackLanguage

Identifies a localization pack

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackLanguage/" class="current_page_link">langPackLanguage</a>#eeca5ce3 flags:<a href="/type/%23/">#</a> official:flags.0?true rtl:flags.2?true beta:flags.3?true name:<a href="/type/string/">string</a> native_name:<a href="/type/string/">string</a> lang_code:<a href="/type/string/">string</a> base_lang_code:flags.1?<a href="/type/string/">string</a> plural_code:<a href="/type/string/">string</a> strings_count:<a href="/type/int/">int</a> translated_count:<a href="/type/int/">int</a> translations_url:<a href="/type/string/">string</a> = <a href="/type/LangPackLanguage/">LangPackLanguage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>official</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the language pack is official</td></tr><tr><td><strong>rtl</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is this a localization pack for an RTL language</td></tr><tr><td><strong>beta</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Is this a beta localization pack?</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language name</td></tr><tr><td><strong>native_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language name in the language itself</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code (pack identifier)</td></tr><tr><td><strong>base_lang_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it should be fetched from base language pack. Unsupported in custom language packs</td></tr><tr><td><strong>plural_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>A language code to be used to apply plural forms. See <a href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a> for more info</td></tr><tr><td><strong>strings_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of non-deleted strings from the language pack</td></tr><tr><td><strong>translated_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of translated strings from the language pack</td></tr><tr><td><strong>translations_url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Link to language translation interface; empty for custom local language packs</td></tr></tbody></table>

### Type

[LangPackLanguage](/type/LangPackLanguage/)
