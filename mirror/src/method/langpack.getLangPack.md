---
title: "langpack.getLangPack"
original: "https://core.telegram.org/method/langpack.getLangPack"
section: ref
description: "Get localization pack strings"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"langpack.getLangPack","url":"/method/langpack.getLangPack/"}]
layout: layout.njk
---

# langpack.getLangPack

Get localization pack strings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackDifference/">langPackDifference</a>#f385c1f6 lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> strings:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LangPackString/">LangPackString</a>&gt; = <a href="/type/LangPackDifference/">LangPackDifference</a>;
---functions---
<a href="/method/langpack.getLangPack/" class="current_page_link">langpack.getLangPack</a>#f2f2330a lang_pack:<a href="/type/string/">string</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/LangPackDifference/">LangPackDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Platform identifier (i.e. <code>android</code>, <code>tdesktop</code>, etc).</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Either an ISO 639-1 language code or a language pack name obtained from a <a href="/api/links/#language-pack-links">language pack link</a>.</td></tr></tbody></table>

### Result

[LangPackDifference](/type/LangPackDifference/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LANGUAGE_INVALID</td><td>The specified lang_code is invalid.</td></tr><tr><td>400</td><td>LANG_CODE_NOT_SUPPORTED</td><td>The specified language code is not supported.</td></tr><tr><td>400</td><td>LANG_PACK_INVALID</td><td>The provided language pack is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
