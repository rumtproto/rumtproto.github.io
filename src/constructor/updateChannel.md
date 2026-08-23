---
title: "updateChannel (конструктор)"
original: "https://core.telegram.org/constructor/updateChannel"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannel

*Конструктор из схемы TL.*

> Channel/supergroup ([channel](/constructor/channel/) and/or [channelFull](/constructor/channelFull/)) information was updated.
> This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [channel](/constructor/channel/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually.
> However, full peer information will not come bundled in updates, so the full peer cache ([channelFull](/constructor/channelFull/)) must be invalidated for `channel_id` when receiving this update.

## Определение TL

```
updateChannel#635b4c09 channel_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel ID |

## Тип

[Update](/type/Update/)

## Related pages

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

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Updates](/constructor/updates/)

Full constructor of updates

#### [updatesCombined](/constructor/updatesCombined/)

Constructor for a group of updates.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
