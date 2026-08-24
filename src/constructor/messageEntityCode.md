---
title: "messageEntityCode"
original: "https://core.telegram.org/constructor/messageEntityCode"
section: ref
kind: constructor
description: "Сущность оформления, представляющая codeblock."
layout: layout.njk
---

# messageEntityCode

Сущность оформления, представляющая `codeblock`.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityCode#28a20571 offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityCode#28a20571 offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
