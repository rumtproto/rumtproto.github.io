---
title: "account.saveTheme"
original: "https://core.telegram.org/method/account.saveTheme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveTheme","url":"/method/account.saveTheme/"}]
layout: layout.njk
---

# account.saveTheme

Save a theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.saveTheme/" class="current_page_link">account.saveTheme</a>#f257106c theme:<a href="/type/InputTheme/">InputTheme</a> unsave:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputTheme/">InputTheme</a></td><td>Theme to save</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Unsave</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_INVALID</td><td>Invalid theme provided.</td></tr></tbody></table>
