---
title: "messages.savedDialogs"
original: "https://core.telegram.org/constructor/messages.savedDialogs"
section: ref
kind: constructor
description: "Представляет несколько диалогов из сохранённых сообщений »."
layout: layout.njk
---

# messages.savedDialogs

Представляет несколько [диалогов из сохранённых сообщений »](/api/saved-messages/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SavedDialog">SavedDialog</a>&gt;</td><td><a href="/api/saved-messages">Сохранённые диалоги сообщений »</a>.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список последних сообщений из каждого сохранённого диалога</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
