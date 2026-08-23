---
title: "recentStory (конструктор)"
original: "https://core.telegram.org/constructor/recentStory"
section: ref
kind: constructor
layout: layout.njk
---

# recentStory

*Конструктор из схемы TL.*

> Summary of a peer's [active stories »](https://core.telegram.org/api/stories#recent-story-summaries), embedded in [user](/constructor/user/).`stories_max_id` and [channel](/constructor/channel/).`stories_max_id` and returned by [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/).

## Определение TL

```
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| live | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the peer is currently broadcasting a [live story »](https://core.telegram.org/api/stories#live-stories). |
| max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If live is set, ID of the peer's active [live story »](https://core.telegram.org/api/stories#live-stories); otherwise, ID of the peer's maximum active story. |

## Тип

[RecentStory](/type/RecentStory/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers).

#### [channel](/constructor/channel/)

Channel/supergroup info

When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

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

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) for an implementation of the logic to use when updating the [local channel peer database](https://core.telegram.org/api/peers).

#### [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/)

Get compact [active story summaries »](https://core.telegram.org/api/stories#recent-story-summaries) for a set of peers.
