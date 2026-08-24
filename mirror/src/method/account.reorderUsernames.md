---
title: "account.reorderUsernames"
original: "https://core.telegram.org/method/account.reorderUsernames"
section: ref
description: "Reorder usernames associated with the currently logged-in user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.reorderUsernames","url":"/method/account.reorderUsernames/"}]
layout: layout.njk
---

# account.reorderUsernames

Reorder usernames associated with the currently logged-in user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.reorderUsernames/" class="current_page_link">account.reorderUsernames</a>#ef500eab order:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>The new order for active usernames. All active usernames must be specified.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ORDER_INVALID</td><td>The specified username order is invalid.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>The username was not modified.</td></tr></tbody></table>
