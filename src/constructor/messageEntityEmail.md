---
title: "messageEntityEmail"
original: "https://core.telegram.org/constructor/messageEntityEmail"
section: ref
kind: constructor
description: "Сущность оформления, представляющая адрес email@example.com."
layout: layout.njk
---

# messageEntityEmail

Сущность оформления, представляющая адрес [email@example.com](mailto:email@example.com).

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
```

#### Схема API

```
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
