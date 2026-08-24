---
title: "MissingInvitee"
original: "https://core.telegram.org/type/MissingInvitee"
section: ref
kind: type
description: "Информация о том, почему определённого пользователя не удалось пригласить »."
layout: layout.njk
---

# MissingInvitee

Информация о том, почему определённого пользователя не удалось [пригласить »](/api/invites/#direct-invites).

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/missingInvitee">missingInvitee</a></td><td>Информация о том, почему определённого пользователя не удалось <a href="/api/invites#direct-invites">пригласить »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
