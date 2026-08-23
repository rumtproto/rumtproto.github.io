---
title: "messageActionSuggestedPostApproval (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostApproval"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSuggestedPostApproval

*Конструктор из схемы TL.*

> A [suggested post »](https://core.telegram.org/api/suggested-posts) was approved or rejected.

## Определение TL

```
messageActionSuggestedPostApproval#ee7a1596 flags:# rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?string schedule_date:flags.3?int price:flags.4?StarsAmount = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| rejected | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the suggested post was rejected. |
| balance_too_low | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the post was approved but the user's balance is too low to pay for the suggested post. |
| reject_comment | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | If the suggested post was rejected, can optionally contain a rejection comment. |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Scheduling date. |
| price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[StarsAmount](/type/StarsAmount/) | Price for the suggested post. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.
