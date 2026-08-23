---
title: "phone.exportGroupCallInvite (метод)"
original: "https://core.telegram.org/method/phone.exportGroupCallInvite"
section: ref
kind: method
layout: layout.njk
---

# phone.exportGroupCallInvite

*Метод из схемы TL.*

> Get an invite link for a public [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams).
> Non-admin members or subscribers may export a link with `can_self_unmute` omitted. Only group call admins may set `can_self_unmute` to export a link that allows users to speak.
> Cannot be used for video chats/livestreams associated with private groups/channels, [conference calls »](https://core.telegram.org/api/group-calls#conference-calls) or [live stories »](https://core.telegram.org/api/group-calls#live-stories).

## Определение TL

```
phone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;
---functions---
phone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_self_unmute | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | For public video chats/livestreams, group call admins only: allow users that join using this link to speak without explicitly requesting permission, for example by raising their hand. |
| call | [InputGroupCall](/type/InputGroupCall/) | The public [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams) |

## Результат

[phone.ExportedGroupCallInvite](/type/phone.ExportedGroupCallInvite/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |
| 403 | PUBLIC_CHANNEL_MISSING | You can only export group call invite links for public chats or channels. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
