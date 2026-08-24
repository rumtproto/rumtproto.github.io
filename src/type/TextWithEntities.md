---
title: "TextWithEntities"
original: "https://core.telegram.org/type/TextWithEntities"
section: ref
kind: type
description: "Оформленный текст с сущностями оформления"
layout: layout.njk
---

# TextWithEntities

Оформленный текст с [сущностями оформления](/api/entities/)

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===216===
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

Схема API:

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

---functions---

messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/textWithEntities">textWithEntities</a></td><td>Оформленный текст с <a href="/api/entities">сущностями оформления</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.summarizeText">messages.summarizeText</a></td><td>Составить краткое содержание сообщения с помощью ИИ; подробнее см. <a href="/api/ai#summarize-messages">здесь »</a>.<br><br>Клиентам следует использовать <a href="/constructor/message">message</a>.<code>summary_from_language</code> как подсказку для показа кнопки составления краткого содержания; отсутствие этого поля не запрещает вызывать данный метод.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
