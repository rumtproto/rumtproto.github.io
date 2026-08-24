---
title: "chatlists.ChatlistUpdates"
original: "https://core.telegram.org/type/chatlists.ChatlistUpdates"
section: ref
kind: type
description: "Обновлённые сведения о глубокой ссылке на папку чатов »."
layout: layout.njk
---

# chatlists.ChatlistUpdates

Обновлённые сведения о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;

---functions---

chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistUpdates">chatlists.chatlistUpdates</a></td><td>Обновлённая информация о <a href="/api/links#chat-folder-links">глубокой ссылке на папку чатов »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/chatlists.getChatlistUpdates">chatlists.getChatlistUpdates</a></td><td>Получить новые чаты, связанные с импортированной <a href="/api/links#chat-folder-links">глубокой ссылкой на папку чатов »</a>. Вызывается не чаще одного раза в <code>chatlist_update_period</code> секунд (согласно соответствующему <a href="/api/config#chatlist-update-period">параметру конфигурации клиента »</a>).</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
