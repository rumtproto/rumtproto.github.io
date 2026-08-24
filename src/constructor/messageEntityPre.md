---
title: "messageEntityPre"
original: "https://core.telegram.org/constructor/messageEntityPre"
section: ref
kind: constructor
description: "Сущность оформления, представляющая форматированный codeblock с возможностью указать язык программирования для этого блока кода."
layout: layout.njk
---

# messageEntityPre

Сущность оформления, представляющая форматированный `codeblock` с возможностью указать язык программирования для этого блока кода.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
```

#### Схема API

```
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>language</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Язык программирования кода</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
