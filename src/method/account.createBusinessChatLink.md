---
title: "account.createBusinessChatLink"
original: "https://core.telegram.org/method/account.createBusinessChatLink"
section: ref
kind: method
description: "Создать глубокую ссылку на бизнес-чат »."
layout: layout.njk
---

# account.createBusinessChatLink

Создать [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links).

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
---functions---
account.createBusinessChatLink#8851e68e link:InputBusinessChatLink = BusinessChatLink;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/InputBusinessChatLink">InputBusinessChatLink</a></td><td>Информация о создаваемой ссылке.</td></tr></tbody></table>

### Результат

[BusinessChatLink](/type/BusinessChatLink/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHATLINKS_TOO_MUCH</td><td>Создано слишком много <a href="/api/business#business-chat-links">ссылок на бизнес-чат</a>, удалите часть старых ссылок.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
