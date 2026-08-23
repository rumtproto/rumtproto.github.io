---
title: "messageActionPhoneCall (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPhoneCall"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPhoneCall

*Конструктор из схемы TL.*

> A phone call

## Определение TL

```
messageActionPhoneCall#80e11a7f flags:# video:flags.2?true call_id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is this a video call? |
| call_id | [long](/type/long/) | Call ID |
| reason | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PhoneCallDiscardReason](/type/PhoneCallDiscardReason/) | If the call has ended, the reason why it ended |
| duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Duration of the call in seconds |

## Тип

[MessageAction](/type/MessageAction/)
