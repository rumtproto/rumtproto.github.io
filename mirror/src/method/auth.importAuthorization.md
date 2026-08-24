---
title: "auth.importAuthorization"
original: "https://core.telegram.org/method/auth.importAuthorization"
section: ref
description: "Logs in a user using a key transmitted from his native data-center."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importAuthorization","url":"/method/auth.importAuthorization/"}]
layout: layout.njk
---

# auth.importAuthorization

Logs in a user using a key transmitted from his native data-center.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.importAuthorization/" class="current_page_link">auth.importAuthorization</a>#a57a7dad id:<a href="/type/long/">long</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Authorization key</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AUTH_BYTES_INVALID</td><td>The provided authorization is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>
