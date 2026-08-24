---
title: "messageEntityUrl"
original: "https://core.telegram.org/constructor/messageEntityUrl"
section: ref
kind: constructor
description: "Сущность оформления, представляющая ссылку в тексте: https://google.com; для текстовых ссылок используйте messageEntityTextUrl."
layout: layout.njk
---

# messageEntityUrl

Сущность оформления, представляющая ссылку в тексте: [https://google.com](https://google.com); для [текстовых ссылок](https://google.com) используйте [messageEntityTextUrl](/constructor/messageEntityTextUrl/).

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [messageEntityTextUrl](/constructor/messageEntityTextUrl/)

Сущность оформления, представляющая [текстовую ссылку](https://google.com): для ссылок прямо в тексте, вроде [https://google.com](https://google.com), используйте [messageEntityUrl](/constructor/messageEntityUrl/).

Обратите внимание, что перед открытием этой ссылки пользователю необходимо показать дополнительное всплывающее окно подтверждения с полным URL, если только домен не удовлетворяет условиям, указанным в [документации по белому списку доменов »](/api/config/#whitelisted-domains).
