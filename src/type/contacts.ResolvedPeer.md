---
title: "contacts.ResolvedPeer"
original: "https://core.telegram.org/type/contacts.ResolvedPeer"
section: ref
kind: type
description: "Пир, возвращённый после разрешения @username"
layout: layout.njk
---

# Contacts.ResolvedPeer

Пир, возвращённый после разрешения `@username`

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.resolvedPeer">contacts.resolvedPeer</a></td><td>Разрешённый пир</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.resolveUsername">contacts.resolveUsername</a></td><td>Разрешить @username, чтобы получить сведения о пире</td></tr><tr><td><a href="/method/contacts.resolvePhone">contacts.resolvePhone</a></td><td>Разрешить номер телефона, чтобы получить сведения о пользователе, если это допускают его настройки конфиденциальности.<br><br>Обязательно реализуйте на стороне клиента ограничение частоты вызовов и подавление дребезга для этого метода, допуская не более 1 вызова каждые 3 секунды.</td></tr></tbody></table>
