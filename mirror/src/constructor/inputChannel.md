---
title: "inputChannel"
original: "https://core.telegram.org/constructor/inputChannel"
section: ref
description: "When updating the local peer database, all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputChannel","url":"/constructor/inputChannel/"}]
layout: layout.njk
---

# inputChannel

Represents a channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChannel/" class="current_page_link">inputChannel</a>#f35aec28 channel_id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputChannel/">InputChannel</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash taken from the <a href="/constructor/channel/">channel</a> constructor</td></tr></tbody></table>

### Type

[InputChannel](/type/InputChannel/)

### Related pages

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
