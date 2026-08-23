---
title: "messageEntityCustomEmoji (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityCustomEmoji"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityCustomEmoji

*Конструктор из схемы TL.*

> Represents a custom emoji.  
> Note that this entity must wrap exactly one regular emoji (the one contained in [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) in the related text, otherwise the server will ignore it.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===144===
> messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| document_id | [long](/type/long/) | Document ID of the [custom emoji](https://core.telegram.org/api/custom-emoji), use [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) to fetch the emoji animation and the actual emoji it represents. |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji).

Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
