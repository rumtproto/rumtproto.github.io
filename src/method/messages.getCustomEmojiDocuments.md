---
title: "messages.getCustomEmojiDocuments"
original: "https://core.telegram.org/method/messages.getCustomEmojiDocuments"
section: ref
kind: method
description: "Получить стикеры с пользовательскими эмодзи »."
layout: layout.njk
---

# messages.getCustomEmojiDocuments

Получить [стикеры с пользовательскими эмодзи »](/api/custom-emoji/).

Возвращает список [документов](/constructor/document/) с анимированным пользовательским эмодзи в формате TGS и атрибутом [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) с исходным эмодзи и сведениями о наборе эмодзи, которому принадлежит этот пользовательский эмодзи.

```
---functions---
messages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы <a href="/api/custom-emoji">пользовательских эмодзи</a> из сущности <a href="/constructor/messageEntityCustomEmoji">messageEntityCustomEmoji</a>.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)\>

### Этот метод доступен и пользователям, и ботам

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/)

Представляет пользовательский эмодзи.  
Учтите, что эта сущность обязана охватывать ровно один обычный эмодзи (тот, который содержится в [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) в соответствующем тексте, иначе сервер её проигнорирует.

#### [document](/constructor/document/)

Документ

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Информация о пользовательском эмодзи
