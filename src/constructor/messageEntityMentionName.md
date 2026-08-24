---
title: "messageEntityMentionName"
original: "https://core.telegram.org/constructor/messageEntityMentionName"
section: ref
kind: constructor
description: "Сущность оформления, представляющая упоминание пользователя: для _создания_ упоминания используйте inputMessageEntityMentionName."
layout: layout.njk
---

# messageEntityMentionName

Сущность оформления, представляющая [упоминание пользователя](/api/mentions/): для _создания_ упоминания используйте [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).

```
messageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор упомянутого пользователя</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/)

Сущность оформления, с помощью которой можно создать [упоминание пользователя](/api/mentions/); в получаемых упоминаниях вместо неё используется конструктор [messageEntityMentionName](/constructor/messageEntityMentionName/).
