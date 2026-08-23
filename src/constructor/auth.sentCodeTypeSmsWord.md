---
title: "auth.sentCodeTypeSmsWord (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSmsWord"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeSmsWord

*Конструктор из схемы TL.*

> The code was sent via SMS as a secret word, starting with the letter specified in `beginning`

## Определение TL

```
auth.sentCodeTypeSmsWord#a416ac81 flags:# beginning:flags.0?string = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| beginning | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, the secret word in the sent SMS (which may contain multiple words) starts with this letter. |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
