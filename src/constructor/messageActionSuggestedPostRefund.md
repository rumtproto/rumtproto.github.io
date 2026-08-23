---
title: "messageActionSuggestedPostRefund (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostRefund"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSuggestedPostRefund

*Конструктор из схемы TL.*

> A [suggested post »](https://core.telegram.org/api/suggested-posts) was accepted and posted or scheduled, but either the channel deleted the posted/scheduled post before [stars\_suggested\_post\_age\_min](https://core.telegram.org/api/config#stars-suggested-post-age-min) seconds have elapsed, or the user refunded the payment for the stars used to pay for the suggested post.

## Определение TL

```
messageActionSuggestedPostRefund#69f916f8 flags:# payer_initiated:flags.0?true = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| payer_initiated | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the user refunded the payment for the stars used to pay for the suggested post. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
