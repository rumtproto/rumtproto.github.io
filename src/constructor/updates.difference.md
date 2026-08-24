---
title: "updates.difference"
original: "https://core.telegram.org/constructor/updates.difference"
section: ref
kind: constructor
description: "Полный список произошедших событий."
layout: layout.njk
---

# updates.difference

Полный список произошедших событий.

```
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список новых сообщений</td></tr><tr><td><strong>new_encrypted_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/EncryptedMessage">EncryptedMessage</a>&gt;</td><td>Список новых зашифрованных сообщений секретного чата</td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Update">Update</a>&gt;</td><td>Список обновлений</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список чатов, упомянутых в событиях</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в событиях</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/updates.State">updates.State</a></td><td>Текущее состояние</td></tr></tbody></table>

### Тип

[updates.Difference](/type/updates.Difference/)
