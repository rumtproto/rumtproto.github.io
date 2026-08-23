---
title: "messages.getCustomEmojiDocuments (метод)"
original: "https://core.telegram.org/method/messages.getCustomEmojiDocuments"
section: ref
kind: method
layout: layout.njk
---

# messages.getCustomEmojiDocuments

*Метод из схемы TL.*

> Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji).
> Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.

## Определение TL

```
---functions---
messages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| document_id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | [Custom emoji](https://core.telegram.org/api/custom-emoji) IDs from a [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/). |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)\>

## Both users and bots can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/)

Represents a custom emoji.  
Note that this entity must wrap exactly one regular emoji (the one contained in [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) in the related text, otherwise the server will ignore it.

#### [document](/constructor/document/)

Document

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
