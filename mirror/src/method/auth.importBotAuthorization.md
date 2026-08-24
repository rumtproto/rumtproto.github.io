---
title: "auth.importBotAuthorization"
original: "https://core.telegram.org/method/auth.importBotAuthorization"
section: ref
description: "Bots are small applications that run entirely within the Telegram app."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importBotAuthorization","url":"/method/auth.importBotAuthorization/"}]
layout: layout.njk
---

# auth.importBotAuthorization

Login as a bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.importBotAuthorization/" class="current_page_link">auth.importBotAuthorization</a>#67a3ff2c flags:<a href="/type/int/">int</a> api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> bot_auth_token:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Reserved for future use</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Application identifier (see. <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Application identifier hash (see. <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>bot_auth_token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Bot token (see <a href="https://core.telegram.org/bots">bots</a>)</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ACCESS_TOKEN_EXPIRED</td><td>Access token expired.</td></tr><tr><td>400</td><td>ACCESS_TOKEN_INVALID</td><td>Access token invalid.</td></tr><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>This API id was published somewhere, you can't use it now.</td></tr></tbody></table>

### Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)

Bots are small applications that run entirely within the Telegram app.
