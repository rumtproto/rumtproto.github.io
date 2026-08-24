---
title: "account.changeAuthorizationSettings"
original: "https://core.telegram.org/method/account.changeAuthorizationSettings"
section: ref
description: "Change settings related to a session."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.changeAuthorizationSettings","url":"/method/account.changeAuthorizationSettings/"}]
layout: layout.njk
---

# account.changeAuthorizationSettings

Change settings related to a session.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.changeAuthorizationSettings/" class="current_page_link">account.changeAuthorizationSettings</a>#40f48462 flags:<a href="/type/%23/">#</a> confirmed:flags.3?true hash:<a href="/type/long/">long</a> encrypted_requests_disabled:flags.0?<a href="/type/Bool/">Bool</a> call_requests_disabled:flags.1?<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>confirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, <a href="/api/auth/#confirming-login">confirms a newly logged in session »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Session ID from the <a href="/constructor/authorization/">authorization</a> constructor, fetchable using <a href="/method/account.getAuthorizations/">account.getAuthorizations</a></td></tr><tr><td><strong>encrypted_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Bool/">Bool</a></td><td>Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed</td></tr><tr><td><strong>call_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Bool/">Bool</a></td><td>Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>The provided hash is invalid.</td></tr></tbody></table>

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [authorization](/constructor/authorization/)

Logged-in session

#### [account.getAuthorizations](/method/account.getAuthorizations/)

Get logged-in sessions
