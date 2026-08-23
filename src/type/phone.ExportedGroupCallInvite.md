---
title: "phone.ExportedGroupCallInvite (тип)"
original: "https://core.telegram.org/type/phone.ExportedGroupCallInvite"
section: ref
kind: type
layout: layout.njk
---

# phone.ExportedGroupCallInvite

*Тип из схемы TL.*

> An exported group call invitation.

## Определение TL

```
phone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;

---functions---

phone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.exportedGroupCallInvite](/constructor/phone.exportedGroupCallInvite/) | An invite to a group call or livestream |

## Методы

| Method | Описание |
|---|---|
| [phone.exportGroupCallInvite](/method/phone.exportGroupCallInvite/) | Get an invite link for a public [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams). Non-admin members or subscribers may export a link with can_self_unmute omitted. Only group call admins may set can_self_unmute to export a link that allows users to speak. Cannot be used for video chats/livestreams associated with private groups/channels, [conference calls »](https://core.telegram.org/api/group-calls#conference-calls) or [live stories »](https://core.telegram.org/api/group-calls#live-stories). |
