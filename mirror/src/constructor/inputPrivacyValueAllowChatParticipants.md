---
title: "inputPrivacyValueAllowChatParticipants"
original: "https://core.telegram.org/constructor/inputPrivacyValueAllowChatParticipants"
section: ref
description: "Allow only participants of certain chats"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPrivacyValueAllowChatParticipants","url":"/constructor/inputPrivacyValueAllowChatParticipants/"}]
layout: layout.njk
---

# inputPrivacyValueAllowChatParticipants

Allow only participants of certain chats

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPrivacyValueAllowChatParticipants/" class="current_page_link">inputPrivacyValueAllowChatParticipants</a>#840649cf chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/InputPrivacyRule/">InputPrivacyRule</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Allowed chat IDs (either a <a href="/constructor/chat/">chat</a> or a <a href="/constructor/channel/">supergroup</a> ID, verbatim the way it is received in the constructor (i.e. unlike with bot API IDs, here group and supergroup IDs should be treated in the same way)).</td></tr></tbody></table>

### Type

[InputPrivacyRule](/type/InputPrivacyRule/)

### Related pages

#### [chat](/constructor/chat/)

Info about a group.

When updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](/api/peers/).

#### [channel](/constructor/channel/)

Channel/supergroup info

When updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

The only exception to the above rule is when the `min` flag is set, in which case **only** the following fields must be applied over any locally stored version:

-   `title`
-   `megagroup`
-   `color`
-   `photo`
-   `username`
-   `usernames`
-   `has_geo`
-   `noforwards`
-   `emoji_status`
-   `has_link`
-   `slow_mode_enabled`
-   `scam`
-   `fake`
-   `gigagroup`
-   `forum`
-   `level`
-   `restricted`
-   `restriction_reason`
-   `join_to_send`
-   `join_request`
-   `is_verified`
-   `default_banned_rights`
-   `signature_profiles`
-   `autotranslation`
-   `broadcast_messages_allowed`
-   `monoforum`
-   `forum_tabs`
-   `linked_monoforum_id`
-   `send_paid_messages_stars`
-   `bot_verification_icon`

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) for an implementation of the logic to use when updating the [local channel peer database](/api/peers/).
