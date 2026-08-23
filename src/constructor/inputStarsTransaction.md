---
title: "inputStarsTransaction (конструктор)"
original: "https://core.telegram.org/constructor/inputStarsTransaction"
section: ref
kind: constructor
layout: layout.njk
---

# inputStarsTransaction

*Конструктор из схемы TL.*

> Used to fetch info about a [Telegram Star transaction »](https://core.telegram.org/api/stars#balance-and-transaction-history).

## Определение TL

```
inputStarsTransaction#206ae6d1 flags:# refund:flags.0?true id:string = InputStarsTransaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| refund | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, fetches info about the refund transaction for this transaction. |
| id | [string](/type/string/) | Transaction ID. |

## Тип

[InputStarsTransaction](/type/InputStarsTransaction/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
