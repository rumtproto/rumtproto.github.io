---
title: "messages.deleteRevokedExportedChatInvites (метод)"
original: "https://core.telegram.org/method/messages.deleteRevokedExportedChatInvites"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteRevokedExportedChatInvites

*Метод из схемы TL.*

> Delete all revoked chat invites

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Chat |
| admin_id | [InputUser](/type/InputUser/) | ID of the admin that originally generated the revoked chat invites |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ADMIN_ID_INVALID | The specified admin ID is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
