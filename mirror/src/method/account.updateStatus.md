---
title: "account.updateStatus"
original: "https://core.telegram.org/method/account.updateStatus"
section: ref
description: "Updates online user status."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateStatus","url":"/method/account.updateStatus/"}]
layout: layout.njk
---

# account.updateStatus

Updates online user status.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updateStatus/" class="current_page_link">account.updateStatus</a>#6628562c offline:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offline</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>If <a href="/constructor/boolTrue/">(boolTrue)</a> is transmitted, user status will change to <a href="/constructor/userStatusOffline/">(userStatusOffline)</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [userStatusOffline](/constructor/userStatusOffline/)

The user's offline status.
