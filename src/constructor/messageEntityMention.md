---
title: "messageEntityMention"
original: "https://core.telegram.org/constructor/messageEntityMention"
section: ref
kind: constructor
description: "Сущность оформления, упоминающая пользователя по @username; для упоминания пользователей по их идентификатору можно также использовать messageEntityMentionName."
layout: layout.njk
---

# messageEntityMention

Сущность оформления, [упоминающая](/api/mentions/) пользователя по `@username`; для упоминания пользователей по их идентификатору можно также использовать [messageEntityMentionName](/constructor/messageEntityMentionName/).

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Сущность оформления, представляющая [упоминание пользователя](/api/mentions/): для _создания_ упоминания используйте [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
