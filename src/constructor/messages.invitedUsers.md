---
title: "messages.invitedUsers"
original: "https://core.telegram.org/constructor/messages.invitedUsers"
section: ref
kind: constructor
description: "Содержит информацию об успешно и неуспешно приглашённых » пользователях."
layout: layout.njk
---

# messages.invitedUsers

Содержит информацию об успешно и неуспешно [приглашённых »](/api/invites/#direct-invites) пользователях.

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>updates</strong></td><td style="text-align: center;"><a href="/type/Updates">Updates</a></td><td>Список обновлений об успешно приглашённых пользователях (и, при необходимости, сведения о созданной группе)</td></tr><tr><td><strong>missing_invitees</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MissingInvitee">MissingInvitee</a>&gt;</td><td>Список пользователей, которых не удалось пригласить, с указанием причины.</td></tr></tbody></table>

### Тип

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
