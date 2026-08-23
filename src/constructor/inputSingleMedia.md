---
title: "inputSingleMedia (конструктор)"
original: "https://core.telegram.org/constructor/inputSingleMedia"
section: ref
kind: constructor
layout: layout.njk
---

# inputSingleMedia

*Конструктор из схемы TL.*

> A single media in an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

## Определение TL

```
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| media | [InputMedia](/type/InputMedia/) | The media |
| random_id | [long](/type/long/) | Unique client media ID required to prevent message resending. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| message | [string](/type/string/) | A caption for the media |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text |

## Тип

[InputSingleMedia](/type/InputSingleMedia/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media)
