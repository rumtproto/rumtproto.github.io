---
title: "account.Themes"
original: "https://core.telegram.org/type/account.Themes"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.Themes","url":"/type/account.Themes/"}]
layout: layout.njk
---

# account.Themes

Installed themes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.themesNotModified/">account.themesNotModified</a>#f41eb622 = <a href="/type/account.Themes/" class="current_page_link">account.Themes</a>;
<a href="/constructor/account.themes/">account.themes</a>#9a3d8c6d hash:<a href="/type/long/">long</a> themes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Theme/">Theme</a>&gt; = <a href="/type/account.Themes/" class="current_page_link">account.Themes</a>;

---functions---

<a href="/method/account.getThemes/">account.getThemes</a>#7206e458 format:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/account.Themes/" class="current_page_link">account.Themes</a>;
<a href="/method/account.getChatThemes/">account.getChatThemes</a>#d638de89 hash:<a href="/type/long/">long</a> = <a href="/type/account.Themes/" class="current_page_link">account.Themes</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.themesNotModified/">account.themesNotModified</a></td><td>No new themes were installed</td></tr><tr><td><a href="/constructor/account.themes/">account.themes</a></td><td>Installed themes</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getThemes/">account.getThemes</a></td><td>Get installed themes</td></tr><tr><td><a href="/method/account.getChatThemes/">account.getChatThemes</a></td><td>Get all available chat <a href="/api/themes/">themes »</a>.</td></tr></tbody></table>
