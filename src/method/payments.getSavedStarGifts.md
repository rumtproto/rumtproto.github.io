---
title: "payments.getSavedStarGifts (метод)"
original: "https://core.telegram.org/method/payments.getSavedStarGifts"
section: ref
kind: method
layout: layout.njk
---

# payments.getSavedStarGifts

*Метод из схемы TL.*

> Fetch the full list of [gifts »](https://core.telegram.org/api/gifts#list-all-received-gifts) owned, received or [hosted »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) by a peer.
> Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.

## Определение TL

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exclude_unsaved | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Exclude gifts not pinned on the profile. |
| exclude_saved | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Exclude gifts pinned on the profile. |
| exclude_unlimited | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Exclude gifts that do not have the [starGift](/constructor/starGift/).limited flag set. |
| exclude_unique | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Exclude [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts). |
| sort_by_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, sorts the gifts by price instead of reception date. |
| exclude_upgradable | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Exclude gifts that can be [upgraded to collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts). |
| exclude_unupgradable | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Exclude gifts that cannot be [upgraded to collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts). |
| peer_color_available | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | If set, only returns [collectible gifts](https://core.telegram.org/api/gifts#collectible-gifts) whose palette can be used as a [collectible message palette »](https://core.telegram.org/api/colors#collectible-message-palettes). |
| exclude_hosted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, excludes [hosted collectible gifts »](https://core.telegram.org/api/gifts#hosted-collectible-gifts), returning only gifts owned or received by peer. |
| peer | [InputPeer](/type/InputPeer/) | Fetch only gifts owned, received or [hosted »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) by the specified peer, such as: a user, with peer=[inputPeerUser](/constructor/inputPeerUser/); a channel, with peer=[inputPeerChannel](/constructor/inputPeerChannel/); a [connected business user »](https://core.telegram.org/api/bots/connected-business-bots) (when executing the method as a bot, over the business connection), with peer=[inputPeerUser](/constructor/inputPeerUser/). |
| collection_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Only returns gifts within the specified [collection »](https://core.telegram.org/api/gifts#gift-collections). |
| offset | [string](/type/string/) | [Offset for pagination](https://core.telegram.org/api/offsets). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

## Both users and bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | COLLECTION_ID_INVALID | The specified collection ID is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [inputPeerUser](/constructor/inputPeerUser/)

Defines a user for further interaction.

#### [inputPeerChannel](/constructor/inputPeerChannel/)

Defines a channel for further interaction.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
