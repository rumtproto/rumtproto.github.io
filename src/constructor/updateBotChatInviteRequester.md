---
title: "updateBotChatInviteRequester (конструктор)"
original: "https://core.telegram.org/constructor/updateBotChatInviteRequester"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotChatInviteRequester

*Конструктор из схемы TL.*

> Someone has requested to join a chat or channel (bots only, users will receive an [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/), instead)

## Определение TL

```
updateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The chat or channel in question |
| date | [int](/type/int/) | When was the [join request »](https://core.telegram.org/api/invites#join-requests) made |
| user_id | [long](/type/long/) | The user ID that is asking to join the chat or channel |
| about | [string](/type/string/) | Bio of the user |
| invite | [ExportedChatInvite](/type/ExportedChatInvite/) | Chat invite link that was used by the user to send the [join request »](https://core.telegram.org/api/invites#join-requests) |
| qts | [int](/type/int/) | [QTS](/api/updates/) event sequence identifier |

## Тип

[Update](/type/Update/)

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/)

Someone has requested to join a chat or channel
