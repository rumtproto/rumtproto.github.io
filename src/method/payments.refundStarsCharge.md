---
title: "payments.refundStarsCharge (метод)"
original: "https://core.telegram.org/method/payments.refundStarsCharge"
section: ref
kind: method
layout: layout.njk
---

# payments.refundStarsCharge

*Метод из схемы TL.*

> Refund a [Telegram Stars](https://core.telegram.org/api/stars) transaction, see [here »](https://core.telegram.org/api/payments#6-refunds) for more info.

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
payments.refundStarsCharge#25ae8f4a user_id:InputUser charge_id:string = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User to refund. |
| charge_id | [string](/type/string/) | Transaction ID. |

## Результат

[Updates](/type/Updates/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHARGE_ALREADY_REFUNDED | The transaction was already refunded. |
| 400 | CHARGE_ID_EMPTY | The specified charge_id is empty. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Payments API](https://core.telegram.org/api/payments)

You can accept payments from Telegram users via Telegram Bots.
