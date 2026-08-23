---
title: "messageActionPaidMessagesPrice (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesPrice"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPaidMessagesPrice

*Конструктор из схемы TL.*

> The price of [paid messages »](https://core.telegram.org/api/paid-messages) in this chat was changed.

## Определение TL

```
messageActionPaidMessagesPrice#84b88578 flags:# broadcast_messages_allowed:flags.0?true stars:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| broadcast_messages_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Can only be set for channels, if set indicates that [direct messages were enabled »](https://core.telegram.org/api/monoforum), otherwise indicates that direct messages were disabled; the price of paid messages is related to the price of direct messages (aka those sent to the associated [monoforum](https://core.telegram.org/api/monoforum)). |
| stars | [long](/type/long/) | The new price in [Telegram Stars](https://core.telegram.org/api/stars), can be 0 if messages are now free. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
