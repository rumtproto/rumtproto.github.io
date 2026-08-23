---
title: "payments.checkedGiftCode (конструктор)"
original: "https://core.telegram.org/constructor/payments.checkedGiftCode"
section: ref
kind: constructor
layout: layout.njk
---

# payments.checkedGiftCode

*Конструктор из схемы TL.*

> Contains info about a [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links).

## Определение TL

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_giveaway | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this giftcode was created by a [giveaway](https://core.telegram.org/api/giveaways). |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Peer](/type/Peer/) | The peer that created the gift code. |
| giveaway_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Message ID of the giveaway in the channel specified in from_id. |
| to_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | The destination user of the gift. |
| date | [int](/type/int/) | Creation date of the gift code. |
| days | [int](/type/int/) | Duration of the gifted Telegram Premium subscription, in days. |
| used_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | When was the giftcode imported, if it was imported. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
