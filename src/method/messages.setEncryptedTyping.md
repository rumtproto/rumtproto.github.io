---
title: "messages.setEncryptedTyping (метод)"
original: "https://core.telegram.org/method/messages.setEncryptedTyping"
section: ref
kind: method
layout: layout.njk
---

# messages.setEncryptedTyping

*Метод из схемы TL.*

> Send typing event by the current user to a secret chat.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setEncryptedTyping#791451ed peer:InputEncryptedChat typing:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | Secret chat ID |
| typing | [Bool](/type/Bool/) | Typing. Possible values: [(boolTrue)](/constructor/boolTrue/), if the user started typing and more than 5 seconds have passed since the last request [(boolFalse)](/constructor/boolFalse/), if the user stopped typing |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |

## Related pages

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [boolFalse](/constructor/boolFalse/)

Constructor may be interpreted as a **boolean**`false` value.
