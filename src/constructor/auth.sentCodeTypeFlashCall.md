---
title: "auth.sentCodeTypeFlashCall (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFlashCall"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeFlashCall

*Конструктор из схемы TL.*

> The code will be sent via a flash phone call, that will be closed immediately. The phone code will then be the phone number itself, just make sure that the phone number matches the specified pattern.

## Определение TL

```
auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pattern | [string](/type/string/) | [pattern](https://core.telegram.org/api/pattern) to match |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

## Related pages

#### [Pattern matching](https://core.telegram.org/api/pattern)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
