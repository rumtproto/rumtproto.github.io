---
title: "messageEntityUnderline"
original: "https://core.telegram.org/constructor/messageEntityUnderline"
section: ref
kind: constructor
description: "Сущность оформления, представляющая подчёркнутый текст."
layout: layout.njk
---

# messageEntityUnderline

Сущность оформления, представляющая подчёркнутый текст.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===101===
messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
