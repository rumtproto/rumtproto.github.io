---
title: "chatlists.deleteExportedInvite (метод)"
original: "https://core.telegram.org/method/chatlists.deleteExportedInvite"
section: ref
kind: method
layout: layout.njk
---

# chatlists.deleteExportedInvite

*Метод из схемы TL.*

> Delete a previously created [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
chatlists.deleteExportedInvite#719c5c5e chatlist:InputChatlist slug:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | The related folder |
| slug | [string](/type/string/) | slug obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
| 400 | INVITE_SLUG_EXPIRED | The specified chat folder link has expired. |
| 400 | INVITE_SLUG_INVALID | The specified invitation slug is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
