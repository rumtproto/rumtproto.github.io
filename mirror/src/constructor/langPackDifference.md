---
title: "langPackDifference"
original: "https://core.telegram.org/constructor/langPackDifference"
section: ref
description: "Changes to the app's localization pack"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"langPackDifference","url":"/constructor/langPackDifference/"}]
layout: layout.njk
---

# langPackDifference

Changes to the app's localization pack

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackDifference/" class="current_page_link">langPackDifference</a>#f385c1f6 lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> strings:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LangPackString/">LangPackString</a>&gt; = <a href="/type/LangPackDifference/">LangPackDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code</td></tr><tr><td><strong>from_version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Previous version number</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New version number</td></tr><tr><td><strong>strings</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LangPackString/">LangPackString</a>&gt;</td><td>Localized strings</td></tr></tbody></table>

### Type

[LangPackDifference](/type/LangPackDifference/)
