---
title: "auth.importWebTokenAuthorization"
original: "https://core.telegram.org/method/auth.importWebTokenAuthorization"
section: ref
description: "Login by importing an authorization token"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importWebTokenAuthorization","url":"/method/auth.importWebTokenAuthorization/"}]
layout: layout.njk
---

# auth.importWebTokenAuthorization

Login by importing an authorization token

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.importWebTokenAuthorization/" class="current_page_link">auth.importWebTokenAuthorization</a>#2db873a9 api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> web_auth_token:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/obtaining_api_id/">API ID</a></td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/obtaining_api_id/">API hash</a></td></tr><tr><td><strong>web_auth_token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The authorization token</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>WEBAUTH_TOKEN_EXPIRED</td><td>The specified auth token has expired.</td></tr></tbody></table>

### Related pages

#### [Creating your Telegram Application](/api/obtaining_api_id/)

How to get your application identifier and create a new Telegram app.
