---
title: "auth.exportLoginToken"
original: "https://core.telegram.org/method/auth.exportLoginToken"
section: ref
description: "Generate a login token, for login via QR code."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.exportLoginToken","url":"/method/auth.exportLoginToken/"}]
layout: layout.njk
---

# auth.exportLoginToken

Generate a login token, for [login via QR code](/api/qr-login/).  
The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` [deep link »](/api/links/#qr-code-login-links) in the QR code.

For more info, see [login via QR code](/api/qr-login/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.loginToken/">auth.loginToken</a>#629f1980 expires:<a href="/type/int/">int</a> token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
<a href="/constructor/auth.loginTokenMigrateTo/">auth.loginTokenMigrateTo</a>#68e9916 dc_id:<a href="/type/int/">int</a> token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
<a href="/constructor/auth.loginTokenSuccess/">auth.loginTokenSuccess</a>#390d5c5e authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;
---functions---
<a href="/method/auth.exportLoginToken/" class="current_page_link">auth.exportLoginToken</a>#b7e085fe api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> except_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Application identifier (see. <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Application identifier hash (see. <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>except_ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>List of already logged-in user IDs, to prevent logging in twice with the same user</td></tr></tbody></table>

### Result

[auth.LoginToken](/type/auth.LoginToken/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>This API id was published somewhere, you can't use it now.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Restart the authorization process.</td></tr></tbody></table>

### Related pages

#### [Login via QR code](/api/qr-login/)

QR code login flow

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
