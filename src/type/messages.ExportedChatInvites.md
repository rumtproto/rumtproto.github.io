---
title: "messages.ExportedChatInvites"
original: "https://core.telegram.org/type/messages.ExportedChatInvites"
section: ref
kind: type
description: "Информация о приглашениях в чат, экспортированных определённым администратором."
layout: layout.njk
---

# messages.ExportedChatInvites

Информация о приглашениях в чат, экспортированных определённым администратором.

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;

---functions---

messages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvites">messages.exportedChatInvites</a></td><td>Информация о приглашениях в чат, экспортированных определённым администратором.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvites">messages.getExportedChatInvites</a></td><td>Получить информацию о приглашениях конкретного чата</td></tr></tbody></table>
