---
title: "messages.dialogsSlice"
original: "https://core.telegram.org/constructor/messages.dialogsSlice"
section: ref
kind: constructor
description: "Неполный список диалогов с сообщениями и вспомогательными данными."
layout: layout.njk
---

# messages.dialogsSlice

Неполный список диалогов с сообщениями и вспомогательными данными.

```
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число диалогов</td></tr><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Dialog">Dialog</a>&gt;</td><td>Список диалогов</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список последних сообщений из диалогов</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список чатов, упомянутых в диалогах</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в сообщениях и чатах</td></tr></tbody></table>

### Тип

[messages.Dialogs](/type/messages.Dialogs/)
