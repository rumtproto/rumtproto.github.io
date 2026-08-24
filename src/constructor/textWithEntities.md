---
title: "textWithEntities"
original: "https://core.telegram.org/constructor/textWithEntities"
section: ref
kind: constructor
description: "Оформленный текст с сущностями оформления"
layout: layout.njk
---

# textWithEntities

Оформленный текст с [сущностями оформления](/api/entities/)

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===216===
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

#### Схема API

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr></tbody></table>

### Тип

[TextWithEntities](/type/TextWithEntities/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
