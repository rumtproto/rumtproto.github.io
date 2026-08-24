---
title: "account.unregisterDevice"
original: "https://core.telegram.org/method/account.unregisterDevice"
section: ref
description: "Deletes a device by its token, stops sending PUSH-notifications to it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.unregisterDevice","url":"/method/account.unregisterDevice/"}]
layout: layout.njk
---

# account.unregisterDevice

Deletes a device by its token, stops sending PUSH-notifications to it.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.unregisterDevice/" class="current_page_link">account.unregisterDevice</a>#6a0d3206 token_type:<a href="/type/int/">int</a> token:<a href="/type/string/">string</a> other_uids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token_type</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Device token type, see <a href="/api/push-updates/#subscribing-to-notifications">PUSH updates</a> for the possible values.</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Device token, see <a href="/api/push-updates/#subscribing-to-notifications">PUSH updates</a> for the possible values.</td></tr><tr><td><strong>other_uids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>List of user identifiers of other users currently using the client</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TOKEN_INVALID</td><td>The provided token is invalid.</td></tr></tbody></table>

### Related pages

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications
