---
title: "auth.authorization"
original: "https://core.telegram.org/constructor/auth.authorization"
section: ref
description: "Contains user authorization info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.authorization","url":"/constructor/auth.authorization/"}]
layout: layout.njk
---

# auth.authorization

Contains user authorization info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/" class="current_page_link">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>setup_password_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Suggests the user to set up a 2-step verification password to be able to log in again</td></tr><tr><td><strong>otherwise_relogin_days</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If and only if setup_password_required is set and the user declines to set a 2-step verification password, they will be able to log into their account via SMS again only after this many days pass.</td></tr><tr><td><strong>tmp_sessions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Number of <a href="/api/datacenter/#parallel-sessions">parallel sessions</a> the client may open to the main connection of its home DC to increase throughput; if absent or <code>≤ 1</code>, a single main session must be used</td></tr><tr><td><strong>future_auth_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/bytes/">bytes</a></td><td>A <a href="/api/auth/#future-auth-tokens">future auth token</a></td></tr><tr><td><strong>user</strong></td><td style="text-align: center;"><a href="/type/User/">User</a></td><td>Info on authorized user</td></tr></tbody></table>

### Type

[auth.Authorization](/type/auth.Authorization/)

### Related pages

#### [Working with Different Data Centers](/api/datacenter/)

How to connect to the closest DC access point for faster interaction with the API, and things to watch out for when developing a client.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
