---
title: "messages.dialogs"
original: "https://core.telegram.org/constructor/messages.dialogs"
section: ref
kind: constructor
description: "Полный список чатов с сообщениями и вспомогательными данными."
layout: layout.njk
---

# messages.dialogs

Полный список чатов с сообщениями и вспомогательными данными.

```
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Dialog">Dialog</a>&gt;</td><td>Список чатов</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список последних сообщений из каждого чата</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список групп, упомянутых в чатах</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в сообщениях и группах</td></tr></tbody></table>

### Тип

[messages.Dialogs](/type/messages.Dialogs/)
