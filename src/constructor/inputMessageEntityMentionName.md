---
title: "inputMessageEntityMentionName"
original: "https://core.telegram.org/constructor/inputMessageEntityMentionName"
section: ref
kind: constructor
description: "Сущность оформления, с помощью которой можно создать упоминание пользователя; в получаемых упоминаниях вместо неё используется конструктор messageEntityMentionName."
layout: layout.njk
---

# inputMessageEntityMentionName

Сущность оформления, с помощью которой можно создать [упоминание пользователя](/api/mentions/); в получаемых упоминаниях вместо неё используется конструктор [messageEntityMentionName](/constructor/messageEntityMentionName/).

```
inputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор упомянутого пользователя</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Сущность оформления, представляющая [упоминание пользователя](/api/mentions/): для _создания_ упоминания используйте [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
