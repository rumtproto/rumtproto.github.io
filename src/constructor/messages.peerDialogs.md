---
title: "messages.peerDialogs"
original: "https://core.telegram.org/constructor/messages.peerDialogs"
section: ref
kind: constructor
description: "Сведения о диалогах нескольких пиров"
layout: layout.njk
---

# messages.peerDialogs

Сведения о диалогах нескольких пиров

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Dialog">Dialog</a>&gt;</td><td>Сведения о диалоге</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Сообщения, упомянутые в сведениях о диалоге</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/updates.State">updates.State</a></td><td>Текущее <a href="/api/updates">состояние обновлений диалога</a></td></tr></tbody></table>

### Тип

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
