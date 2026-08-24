---
title: "businessChatLink"
original: "https://core.telegram.org/constructor/businessChatLink"
section: ref
kind: constructor
description: "Содержит информацию о глубокой ссылке на бизнес-чат », созданной текущей учётной записью."
layout: layout.njk
---

# businessChatLink

Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), созданной текущей учётной записью.

```
businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#business-chat-links">Глубокая ссылка на бизнес-чат</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение, которым нужно предзаполнить поле ввода сообщения.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Понятное человеку название ссылки, упрощающее управление в интерфейсе (видно только создателю ссылки).</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество переходов по ссылке (нажатий, сканирований и т. п.).</td></tr></tbody></table>

### Тип

[BusinessChatLink](/type/BusinessChatLink/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
