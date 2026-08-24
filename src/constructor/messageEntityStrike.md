---
title: "messageEntityStrike"
original: "https://core.telegram.org/constructor/messageEntityStrike"
section: ref
kind: constructor
description: "Сущность оформления, представляющая зачёркнутый текст."
layout: layout.njk
---

# messageEntityStrike

Сущность оформления, представляющая зачёркнутый текст.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===101===
messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
