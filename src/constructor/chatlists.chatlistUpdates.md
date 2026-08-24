---
title: "chatlists.chatlistUpdates"
original: "https://core.telegram.org/constructor/chatlists.chatlistUpdates"
section: ref
kind: constructor
description: "Обновлённая информация о глубокой ссылке на папку чатов »."
layout: layout.njk
---

# chatlists.chatlistUpdates

Обновлённая информация о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>missing_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Новые пиры для вступления</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Сведения о связанном чате</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о связанном пользователе</td></tr></tbody></table>

### Тип

[chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
