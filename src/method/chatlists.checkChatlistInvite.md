---
title: "chatlists.checkChatlistInvite"
original: "https://core.telegram.org/method/chatlists.checkChatlistInvite"
section: ref
kind: method
description: "Получить сведения о глубокой ссылке на папку чатов »."
layout: layout.njk
---

# chatlists.checkChatlistInvite

Получить сведения о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
---functions---
chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] <code>slug</code>, полученный из <a href="/api/links#chat-folder-links">глубокой ссылки на папку с чатами »</a></td></tr></tbody></table>

### Результат

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>Указанный слаг приглашения пуст.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>Срок действия указанной ссылки на папку чатов истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
