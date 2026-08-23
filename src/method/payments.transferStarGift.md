---
title: "payments.transferStarGift (метод)"
original: "https://core.telegram.org/method/payments.transferStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.transferStarGift

*Метод из схемы TL.*

> Transfer a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts) to another user or channel: can only be used if transfer is free (i.e. [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` is not set); see [here »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) for more info on the full flow (including the different flow to use in case the transfer isn't free).

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The gift to transfer. |
| to_id | [InputPeer](/type/InputPeer/) | Destination peer. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PAYMENT_REQUIRED | Payment is required for this action, see [here »](https://core.telegram.org/api/gifts) for more info. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SAVED_ID_EMPTY | The passed inputSavedStarGiftChat.saved_id is empty. |
| 400 | STARGIFT_NOT_FOUND | The specified gift was not found. |
| 400 | STARGIFT_NOT_OWNER | You're not the owner of the gift you trying to transfer. |
| 400 | STARGIFT_NOT_UNIQUE | You can't transfer a non-collectible gift. |
| 400 | STARGIFT_OWNER_INVALID | You cannot transfer or sell a gift owned by another user. |
| 400 | STARGIFT_PEER_INVALID | The specified inputSavedStarGiftChat.peer is invalid. |
| 400 | STARGIFT_TRANSFER_TOO_EARLY_%d | You cannot transfer this gift yet, wait %d seconds. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
