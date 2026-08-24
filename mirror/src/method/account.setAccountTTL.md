---
title: "account.setAccountTTL"
original: "https://core.telegram.org/method/account.setAccountTTL"
section: ref
description: "Set account self-destruction period"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setAccountTTL","url":"/method/account.setAccountTTL/"}]
layout: layout.njk
---

# account.setAccountTTL

Set account self-destruction period

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.setAccountTTL/" class="current_page_link">account.setAccountTTL</a>#2442485e ttl:<a href="/type/AccountDaysTTL/">AccountDaysTTL</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>ttl</strong></td><td style="text-align: center;"><a href="/type/AccountDaysTTL/">AccountDaysTTL</a></td><td>Time to live in days</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>The provided TTL is invalid.</td></tr></tbody></table>
