---
title: "userStatusLastMonth"
original: "https://core.telegram.org/constructor/userStatusLastMonth"
section: ref
description: "Online status: last seen last month"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"userStatusLastMonth","url":"/constructor/userStatusLastMonth/"}]
layout: layout.njk
---

# userStatusLastMonth

Online status: last seen last month

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userStatusLastMonth/" class="current_page_link">userStatusLastMonth</a>#65899777 flags:<a href="/type/%23/">#</a> by_me:flags.0?true = <a href="/type/UserStatus/">UserStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>by_me</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the exact user status of this user is actually available to us, but to view it we must first purchase a <a href="/api/premium/">Premium</a> subscription, or allow this user to see <em>our</em> exact last online status. See <a href="/constructor/privacyKeyStatusTimestamp/">here »</a> for more info.</td></tr></tbody></table>

### Type

[UserStatus](/type/UserStatus/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/)

Whether we can see the last online timestamp of this user.

Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](/api/premium/) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.

If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.
