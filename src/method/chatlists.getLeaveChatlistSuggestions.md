---
title: "chatlists.getLeaveChatlistSuggestions (метод)"
original: "https://core.telegram.org/method/chatlists.getLeaveChatlistSuggestions"
section: ref
kind: method
layout: layout.njk
---

# chatlists.getLeaveChatlistSuggestions

*Метод из схемы TL.*

> Returns identifiers of pinned or always included chats from a chat folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), which are suggested to be left when the chat folder is deleted.

## Определение TL

```
---functions---
chatlists.getLeaveChatlistSuggestions#fdbcd714 chatlist:InputChatlist = Vector<Peer>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chatlist | [InputChatlist](/type/InputChatlist/) | Folder ID |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
