---
title: "contacts.getBlocked"
original: "https://core.telegram.org/method/contacts.getBlocked"
section: ref
kind: method
description: "Возвращает список заблокированных пользователей."
layout: layout.njk
---

# contacts.getBlocked

Возвращает список заблокированных пользователей.

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
---functions---
contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Получать ли список заблокированных для историй; если не установлено, будет получен основной список заблокированных. Различия между ними см. <a href="/api/block">здесь »</a>.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пропускаемых элементов списка</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых элементов списка</td></tr></tbody></table>

### Результат

[contacts.Blocked](/type/contacts.Blocked/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.
