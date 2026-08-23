---
title: "payments.savedStarGifts (конструктор)"
original: "https://core.telegram.org/constructor/payments.savedStarGifts"
section: ref
kind: constructor
layout: layout.njk
---

# payments.savedStarGifts

*Конструктор из схемы TL.*

> Represents a list of [gifts](https://core.telegram.org/api/gifts).

## Определение TL

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results (can be less than the returned gifts, in which case next_offset will be set). |
| chat_notifications_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | Ternary value: can be not set, set&true, set&false. Can only be set for channels we own: the value indicates whether we [enabled gift notifications](https://core.telegram.org/api/gifts#notifications-for-received-channel-gifts) for this channel. |
| gifts | [Vector](https://core.telegram.org/type/Vector%20t)<[SavedStarGift](/type/SavedStarGift/)> | Gifts |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset to pass to [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) to fetch the next page of results. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Channels mentioned in gifts |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in gifts |

## Тип

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Fetch the full list of [gifts »](https://core.telegram.org/api/gifts#list-all-received-gifts) owned, received or [hosted »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) by a peer.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.
