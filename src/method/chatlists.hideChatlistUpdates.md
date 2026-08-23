---
title: "chatlists.hideChatlistUpdates (метод)"
original: "https://core.telegram.org/method/chatlists.hideChatlistUpdates"
section: ref
kind: method
layout: layout.njk
---

# chatlists.hideChatlistUpdates

*Метод из схемы TL.*

> Dismiss new pending peers recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
chatlists.hideChatlistUpdates#66e486fb chatlist:InputChatlist = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | The folder |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
