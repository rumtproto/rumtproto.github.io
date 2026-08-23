---
title: "updatePendingJoinRequests (конструктор)"
original: "https://core.telegram.org/constructor/updatePendingJoinRequests"
section: ref
kind: constructor
layout: layout.njk
---

# updatePendingJoinRequests

*Конструктор из схемы TL.*

> Someone has requested to join a chat or channel

## Определение TL

```
updatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Chat or channel |
| requests_pending | [int](/type/int/) | Number of pending [join requests »](https://core.telegram.org/api/invites#join-requests) for the chat or channel |
| recent_requesters | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | IDs of users that have recently requested to join |

## Тип

[Update](/type/Update/)

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
