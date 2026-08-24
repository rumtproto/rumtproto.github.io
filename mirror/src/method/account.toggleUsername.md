---
title: "account.toggleUsername"
original: "https://core.telegram.org/method/account.toggleUsername"
section: ref
description: "Activate or deactivate a purchased fragment.com username associated to the currently logged-in user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.toggleUsername","url":"/method/account.toggleUsername/"}]
layout: layout.njk
---

# account.toggleUsername

Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to the currently logged-in user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.toggleUsername/" class="current_page_link">account.toggleUsername</a>#58d6b376 username:<a href="/type/string/">string</a> active:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Username</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to activate or deactivate it</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USERNAMES_ACTIVE_TOO_MUCH</td><td>The maximum number of active usernames was reached.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>The username was not modified.</td></tr></tbody></table>
