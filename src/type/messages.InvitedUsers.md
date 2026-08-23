---
title: "messages.InvitedUsers (тип)"
original: "https://core.telegram.org/type/messages.InvitedUsers"
section: ref
kind: type
layout: layout.njk
---

# messages.InvitedUsers

*Тип из схемы TL.*

> Contains info about successfully or unsuccessfully [invited »](https://core.telegram.org/api/invites#direct-invites) users.

## Определение TL

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;

---functions---

messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;
messages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;

channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.invitedUsers](/constructor/messages.invitedUsers/) | Contains info about successfully or unsuccessfully [invited »](https://core.telegram.org/api/invites#direct-invites) users. |

## Методы

| Method | Описание |
|---|---|
| [messages.addChatUser](/method/messages.addChatUser/) | Adds a user to a chat and sends a service message on it. |
| [messages.createChat](/method/messages.createChat/) | Creates a new chat. |
| [channels.inviteToChannel](/method/channels.inviteToChannel/) | Invite users to a channel/supergroup |

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
