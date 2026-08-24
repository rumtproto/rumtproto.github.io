---
title: "account.getChatThemes"
original: "https://core.telegram.org/method/account.getChatThemes"
section: ref
description: "Get all available chat themes »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getChatThemes","url":"/method/account.getChatThemes/"}]
layout: layout.njk
---

# account.getChatThemes

Get all available chat [themes »](/api/themes/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.themesNotModified/">account.themesNotModified</a>#f41eb622 = <a href="/type/account.Themes/">account.Themes</a>;
<a href="/constructor/account.themes/">account.themes</a>#9a3d8c6d hash:<a href="/type/long/">long</a> themes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Theme/">Theme</a>&gt; = <a href="/type/account.Themes/">account.Themes</a>;
---functions---
<a href="/method/account.getChatThemes/" class="current_page_link">account.getChatThemes</a>#d638de89 hash:<a href="/type/long/">long</a> = <a href="/type/account.Themes/">account.Themes</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.Themes](/type/account.Themes/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
