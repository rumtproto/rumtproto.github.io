---
title: "chatlists.ChatlistInvite"
original: "https://core.telegram.org/type/chatlists.ChatlistInvite"
section: ref
kind: type
description: "Информация о глубокой ссылке на папку с чатами »."
layout: layout.njk
---

# chatlists.ChatlistInvite

Информация о [глубокой ссылке на папку с чатами »](/api/links/#chat-folder-links).

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;

---functions---

chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistInviteAlready">chatlists.chatlistInviteAlready</a></td><td>Обновлённые сведения о ранее импортированной <a href="/api/links#chat-folder-links">глубокой ссылке на папку чатов »</a>.</td></tr><tr><td><a href="/constructor/chatlists.chatlistInvite">chatlists.chatlistInvite</a></td><td>Информация о <a href="/api/links#chat-folder-links">глубокой ссылке на папку с чатами »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/chatlists.checkChatlistInvite">chatlists.checkChatlistInvite</a></td><td>Получить сведения о <a href="/api/links#chat-folder-links">глубокой ссылке на папку чатов »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
