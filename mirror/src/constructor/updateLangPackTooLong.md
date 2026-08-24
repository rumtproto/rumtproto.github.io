---
title: "updateLangPackTooLong"
original: "https://core.telegram.org/constructor/updateLangPackTooLong"
section: ref
description: "A language pack has changed, the client should manually fetch the changed strings using langpack.getDifference"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateLangPackTooLong","url":"/constructor/updateLangPackTooLong/"}]
layout: layout.njk
---

# updateLangPackTooLong

A language pack has changed, the client should manually fetch the changed strings using [langpack.getDifference](/method/langpack.getDifference/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateLangPackTooLong/" class="current_page_link">updateLangPackTooLong</a>#46560264 lang_code:<a href="/type/string/">string</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [langpack.getDifference](/method/langpack.getDifference/)

Get new strings in language pack
