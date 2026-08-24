---
title: "chatlists.getChatlistUpdates"
original: "https://core.telegram.org/method/chatlists.getChatlistUpdates"
section: ref
kind: method
description: "Получить новые чаты, связанные с импортированной глубокой ссылкой на папку чатов ». Вызывается не чаще одного раза в chatlist_update_period секунд (согласно соответствующему…"
layout: layout.njk
---

# chatlists.getChatlistUpdates

Получить новые чаты, связанные с импортированной [глубокой ссылкой на папку чатов »](/api/links/#chat-folder-links). Вызывается не чаще одного раза в `chatlist_update_period` секунд (согласно соответствующему [параметру конфигурации клиента »](/api/config/#chatlist-update-period)).

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;
---functions---
chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>Папка</td></tr></tbody></table>

### Результат

[chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>Указанный идентификатор фильтра недействителен.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>INPUT_CHATLIST_INVALID</td><td>Указанная папка недействительна.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
