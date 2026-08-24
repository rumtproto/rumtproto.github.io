---
title: "missingInvitee"
original: "https://core.telegram.org/constructor/missingInvitee"
section: ref
description: "Info about why a specific user could not be invited »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"missingInvitee","url":"/constructor/missingInvitee/"}]
layout: layout.njk
---

# missingInvitee

Info about why a specific user could not be [invited »](/api/invites/#direct-invites).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/missingInvitee/" class="current_page_link">missingInvitee</a>#628c9224 flags:<a href="/type/%23/">#</a> premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:<a href="/type/long/">long</a> = <a href="/type/MissingInvitee/">MissingInvitee</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>premium_would_allow_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, we could not add the user <em>only because</em> the current account needs to purchase a <a href="/api/premium/">Telegram Premium</a> subscription to complete the operation.</td></tr><tr><td><strong>premium_required_for_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, we could not add the user because of their privacy settings, and additionally, the current account needs to purchase a <a href="/api/premium/">Telegram Premium</a> subscription to directly share an invite link with the user via a private message.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user. If neither of the flags below are set, we could not add the user because of their privacy settings, and we can create and directly share an <a href="/api/invites/#invite-links">invite link</a> with them using a normal message, instead.</td></tr></tbody></table>

### Type

[MissingInvitee](/type/MissingInvitee/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
