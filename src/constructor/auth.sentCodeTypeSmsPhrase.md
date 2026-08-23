---
title: "auth.sentCodeTypeSmsPhrase (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSmsPhrase"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeSmsPhrase

*Конструктор из схемы TL.*

> The code was sent via SMS as a secret phrase starting with the word specified in `beginning`

## Определение TL

```
auth.sentCodeTypeSmsPhrase#b37794af flags:# beginning:flags.0?string = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| beginning | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, the secret phrase (and the SMS) starts with this word. |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
