---
title: "LangPackDifference"
original: "https://core.telegram.org/type/LangPackDifference"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"LangPackDifference","url":"/type/LangPackDifference/"}]
layout: layout.njk
---

# LangPackDifference

Language pack changes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/langPackDifference/">langPackDifference</a>#f385c1f6 lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> strings:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LangPackString/">LangPackString</a>&gt; = <a href="/type/LangPackDifference/" class="current_page_link">LangPackDifference</a>;

---functions---

<a href="/method/langpack.getLangPack/">langpack.getLangPack</a>#f2f2330a lang_pack:<a href="/type/string/">string</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/LangPackDifference/" class="current_page_link">LangPackDifference</a>;
<a href="/method/langpack.getDifference/">langpack.getDifference</a>#cd984aa5 lang_pack:<a href="/type/string/">string</a> lang_code:<a href="/type/string/">string</a> from_version:<a href="/type/int/">int</a> = <a href="/type/LangPackDifference/" class="current_page_link">LangPackDifference</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/langPackDifference/">langPackDifference</a></td><td>Changes to the app's localization pack</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/langpack.getLangPack/">langpack.getLangPack</a></td><td>Get localization pack strings</td></tr><tr><td><a href="/method/langpack.getDifference/">langpack.getDifference</a></td><td>Get new strings in language pack</td></tr></tbody></table>
