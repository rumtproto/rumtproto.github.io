---
title: "messages.InvitedUsers"
original: "https://core.telegram.org/type/messages.InvitedUsers"
section: ref
kind: type
description: "Содержит информацию об успешно и неуспешно приглашённых » пользователях."
layout: layout.njk
---

# messages.InvitedUsers

Содержит информацию об успешно и неуспешно [приглашённых »](/api/invites/#direct-invites) пользователях.

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;

---functions---

messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;
messages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;

channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.invitedUsers">messages.invitedUsers</a></td><td>Содержит информацию об успешно и неуспешно <a href="/api/invites#direct-invites">приглашённых »</a> пользователях.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.addChatUser">messages.addChatUser</a></td><td>Добавляет пользователя в чат и отправляет в нём сервисное сообщение.</td></tr><tr><td><a href="/method/messages.createChat">messages.createChat</a></td><td>Создаёт новый чат.</td></tr><tr><td><a href="/method/channels.inviteToChannel">channels.inviteToChannel</a></td><td>Пригласить пользователей в канал или супергруппу</td></tr></tbody></table>

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
