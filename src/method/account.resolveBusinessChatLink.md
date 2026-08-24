---
title: "account.resolveBusinessChatLink"
original: "https://core.telegram.org/method/account.resolveBusinessChatLink"
section: ref
kind: method
description: "Разрешить глубокую ссылку на бизнес-чат »."
layout: layout.njk
---

# account.resolveBusinessChatLink

Разрешить [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links).

```
account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;
---functions---
account.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг ссылки, полученный как указано <a href="/api/links#business-chat-links">здесь »</a>.</td></tr></tbody></table>

### Результат

[account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHATLINK_SLUG_EMPTY</td><td>Указанный слаг пуст.</td></tr><tr><td>400</td><td>CHATLINK_SLUG_EXPIRED</td><td>Срок действия указанной <a href="/api/business#business-chat-links">ссылки на бизнес-чат</a> истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
