---
title: "account.setAuthorizationTTL"
original: "https://core.telegram.org/method/account.setAuthorizationTTL"
section: ref
description: "Set time-to-live of current session"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setAuthorizationTTL","url":"/method/account.setAuthorizationTTL/"}]
layout: layout.njk
---

# account.setAuthorizationTTL

Set time-to-live of current session

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.setAuthorizationTTL/" class="current_page_link">account.setAuthorizationTTL</a>#bf899aa0 authorization_ttl_days:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>authorization_ttl_days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Time-to-live of current session in days</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>You can't logout other sessions if less than 24 hours have passed since you logged on the current session.</td></tr><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>The provided TTL is invalid.</td></tr></tbody></table>
