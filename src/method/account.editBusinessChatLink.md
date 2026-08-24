---
title: "account.editBusinessChatLink"
original: "https://core.telegram.org/method/account.editBusinessChatLink"
section: ref
kind: method
description: "Изменить созданную глубокую ссылку на бизнес-чат »."
layout: layout.njk
---

# account.editBusinessChatLink

Изменить созданную [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links).

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
---functions---
account.editBusinessChatLink#8c3410af slug:string link:InputBusinessChatLink = BusinessChatLink;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг ссылки, полученный как указано <a href="/api/links#business-chat-links">здесь »</a>.</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/InputBusinessChatLink">InputBusinessChatLink</a></td><td>Новые сведения о ссылке.</td></tr></tbody></table>

### Результат

[BusinessChatLink](/type/BusinessChatLink/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHATLINK_SLUG_EMPTY</td><td>Указанный слаг пуст.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
