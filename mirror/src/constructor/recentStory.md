---
title: "recentStory"
original: "https://core.telegram.org/constructor/recentStory"
section: ref
description: "Summary of a peer's active stories », embedded in user.stories_max_id and channel.stories_max_id and returned by stories.getPeerMaxIDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"recentStory","url":"/constructor/recentStory/"}]
layout: layout.njk
---

# recentStory

Summary of a peer's [active stories »](/api/stories/#recent-story-summaries), embedded in [user](/constructor/user/).`stories_max_id` and [channel](/constructor/channel/).`stories_max_id` and returned by [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/recentStory/" class="current_page_link">recentStory</a>#711d692d flags:<a href="/type/%23/">#</a> live:flags.0?true max_id:flags.1?<a href="/type/int/">int</a> = <a href="/type/RecentStory/">RecentStory</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>live</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the peer is currently broadcasting a <a href="/api/stories/#live-stories">live story »</a>.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If <code>live</code> is set, ID of the peer's active <a href="/api/stories/#live-stories">live story »</a>; otherwise, ID of the peer's maximum active story.</td></tr></tbody></table>

### Type

[RecentStory](/type/RecentStory/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).

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

#### [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/)

Get compact [active story summaries »](/api/stories/#recent-story-summaries) for a set of peers.
