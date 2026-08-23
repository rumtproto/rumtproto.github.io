---
title: "updateChatUserTyping (конструктор)"
original: "https://core.telegram.org/constructor/updateChatUserTyping"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatUserTyping

*Конструктор из схемы TL.*

> The user is preparing a message in a group; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing

## Определение TL

```
updateChatUserTyping#83487af0 chat_id:long from_id:Peer action:SendMessageAction = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Group id |
| from_id | [Peer](/type/Peer/) | Peer that started typing (can be the chat itself, in case of anonymous admins). |
| action | [SendMessageAction](/type/SendMessageAction/) | Type of action |

## Тип

[Update](/type/Update/)
