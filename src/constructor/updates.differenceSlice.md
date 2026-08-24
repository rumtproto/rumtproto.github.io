---
title: "updates.differenceSlice"
original: "https://core.telegram.org/constructor/updates.differenceSlice"
section: ref
kind: constructor
description: "Неполный список произошедших событий."
layout: layout.njk
---

# updates.differenceSlice

Неполный список произошедших событий.

```
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список новых сообщений</td></tr><tr><td><strong>new_encrypted_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/EncryptedMessage">EncryptedMessage</a>&gt;</td><td>Новые сообщения из <a href="/api/updates">зашифрованной последовательности событий</a></td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Update">Update</a>&gt;</td><td>Список обновлений</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список чатов, упомянутых в событиях</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в событиях</td></tr><tr><td><strong>intermediate_state</strong></td><td style="text-align: center;"><a href="/type/updates.State">updates.State</a></td><td>Промежуточное состояние</td></tr></tbody></table>

### Тип

[updates.Difference](/type/updates.Difference/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
