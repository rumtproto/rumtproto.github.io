---
title: "messageEntityCustomEmoji"
original: "https://core.telegram.org/constructor/messageEntityCustomEmoji"
section: ref
kind: constructor
description: "Представляет пользовательский эмодзи."
layout: layout.njk
---

# messageEntityCustomEmoji

Представляет пользовательский эмодзи.  
Учтите, что эта сущность обязана охватывать ровно один обычный эмодзи (тот, который содержится в [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) в соответствующем тексте, иначе сервер её проигнорирует.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===144===
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
```

#### Схема API

```
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор документа <a href="/api/custom-emoji">пользовательского эмодзи</a>; используйте <a href="/method/messages.getCustomEmojiDocuments">messages.getCustomEmojiDocuments</a>, чтобы получить анимацию эмодзи и сам эмодзи, который он представляет.</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Получить [стикеры с пользовательскими эмодзи »](/api/custom-emoji/).

Возвращает список [документов](/constructor/document/) с анимированным пользовательским эмодзи в формате TGS и атрибутом [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) с исходным эмодзи и сведениями о наборе эмодзи, которому принадлежит этот пользовательский эмодзи.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Информация о пользовательском эмодзи
