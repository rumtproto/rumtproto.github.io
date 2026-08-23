---
title: "messages.deleteExportedChatInvite (метод)"
original: "https://core.telegram.org/method/messages.deleteExportedChatInvite"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteExportedChatInvite

*Метод из схемы TL.*

> Delete a chat invite

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteExportedChatInvite#d464a42b peer:InputPeer link:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer |
| link | [string](/type/string/) | Invite link |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | INVITE_HASH_EXPIRED | The invite link has expired. |
| 400 | INVITE_REVOKED_MISSING | The specified invite link was already revoked or is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
