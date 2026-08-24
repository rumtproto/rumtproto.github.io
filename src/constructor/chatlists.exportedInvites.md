---
title: "chatlists.exportedInvites"
original: "https://core.telegram.org/constructor/chatlists.exportedInvites"
section: ref
kind: constructor
description: "Информация о нескольких глубоких ссылках на папки с чатами »."
layout: layout.njk
---

# chatlists.exportedInvites

Информация о нескольких [глубоких ссылках на папки с чатами »](/api/links/#chat-folder-links).

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ExportedChatlistInvite">ExportedChatlistInvite</a>&gt;</td><td><a href="/api/links#chat-folder-links">Глубокие ссылки на папки чатов »</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Сведения о связанном чате</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о связанном пользователе</td></tr></tbody></table>

### Тип

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
