---
title: "auth.importLoginToken"
original: "https://core.telegram.org/method/auth.importLoginToken"
section: ref
description: "Login using a redirected login token, generated in case of DC mismatch during QR code login."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importLoginToken","url":"/method/auth.importLoginToken/"}]
layout: layout.njk
---

# auth.importLoginToken

Login using a redirected login token, generated in case of DC mismatch during [QR code login](/api/qr-login/).

For more info, see [login via QR code](/api/qr-login/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.loginToken/">auth.loginToken</a>#629f1980 expires:<a href="/type/int/">int</a> token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
<a href="/constructor/auth.loginTokenMigrateTo/">auth.loginTokenMigrateTo</a>#68e9916 dc_id:<a href="/type/int/">int</a> token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
<a href="/constructor/auth.loginTokenSuccess/">auth.loginTokenSuccess</a>#390d5c5e authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
---functions---
<a href="/method/auth.importLoginToken/" class="current_page_link">auth.importLoginToken</a>#95ac5ce4 token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Login token</td></tr></tbody></table>

### Result

[auth.LoginToken](/type/auth.LoginToken/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AUTH_TOKEN_ALREADY_ACCEPTED</td><td>The specified auth token was already accepted.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXPIRED</td><td>The authorization token has expired.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALID</td><td>The specified auth token is invalid.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALIDX</td><td>The specified auth token is invalid.</td></tr></tbody></table>

### Related pages

#### [Login via QR code](/api/qr-login/)

QR code login flow
