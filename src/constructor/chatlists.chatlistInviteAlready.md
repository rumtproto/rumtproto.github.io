---
title: "chatlists.chatlistInviteAlready"
original: "https://core.telegram.org/constructor/chatlists.chatlistInviteAlready"
section: ref
kind: constructor
description: "Обновлённые сведения о ранее импортированной глубокой ссылке на папку чатов »."
layout: layout.njk
---

# chatlists.chatlistInviteAlready

Обновлённые сведения о ранее импортированной [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>filter_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор импортированной папки</td></tr><tr><td><strong>missing_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Новые пиры для импорта</td></tr><tr><td><strong>already_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Пиры, которые уже были импортированы</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Сведения о связанном чате</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о связанном пользователе</td></tr></tbody></table>

### Тип

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
