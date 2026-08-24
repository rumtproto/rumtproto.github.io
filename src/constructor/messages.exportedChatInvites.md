---
title: "messages.exportedChatInvites"
original: "https://core.telegram.org/constructor/messages.exportedChatInvites"
section: ref
kind: constructor
description: "Информация о приглашениях в чат, экспортированных определённым администратором."
layout: layout.njk
---

# messages.exportedChatInvites

Информация о приглашениях в чат, экспортированных определённым администратором.

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество приглашений, экспортированных администратором</td></tr><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ExportedChatInvite">ExportedChatInvite</a>&gt;</td><td>Экспортированные приглашения</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация об администраторе</td></tr></tbody></table>

### Тип

[messages.ExportedChatInvites](/type/messages.ExportedChatInvites/)
