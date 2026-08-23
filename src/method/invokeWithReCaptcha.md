---
title: "invokeWithReCaptcha (метод)"
original: "https://core.telegram.org/method/invokeWithReCaptcha"
section: ref
kind: method
layout: layout.njk
---

# invokeWithReCaptcha

*Метод из схемы TL.*

> Official clients only: re-execute a method call that required reCAPTCHA verification via a `RECAPTCHA_CHECK_%s__%s`, where the first placeholder is the `action`, and the second one is the reCAPTCHA key ID.

## Определение TL

```
---functions---
invokeWithReCaptcha#adbb0f94 {X:Type} token:string query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| token | [string](/type/string/) | reCAPTCHA token received after verification. |
| query | !X | The original method call. |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
