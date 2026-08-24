---
title: "messages.ChatInviteImporters"
original: "https://core.telegram.org/type/messages.ChatInviteImporters"
section: ref
kind: type
description: "Список пользователей, воспользовавшихся пригласительной ссылкой на чат."
layout: layout.njk
---

# messages.ChatInviteImporters

Список пользователей, воспользовавшихся пригласительной ссылкой на чат.

```
messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;

---functions---

messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chatInviteImporters">messages.chatInviteImporters</a></td><td>Информация о пользователях, вступивших в чат по определённой пригласительной ссылке</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getChatInviteImporters">messages.getChatInviteImporters</a></td><td>Получить информацию о пользователях, вступивших в чат по определённой пригласительной ссылке</td></tr></tbody></table>
