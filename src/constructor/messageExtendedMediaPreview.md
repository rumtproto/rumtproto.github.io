---
title: "messageExtendedMediaPreview (конструктор)"
original: "https://core.telegram.org/constructor/messageExtendedMediaPreview"
section: ref
kind: constructor
layout: layout.njk
---

# messageExtendedMediaPreview

*Конструктор из схемы TL.*

> Paid media preview for not yet purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info.

## Определение TL

```
messageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| w | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Width |
| h | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Height |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[PhotoSize](/type/PhotoSize/) | [Extremely low resolution thumbnail](https://core.telegram.org/api/files/#stripped-thumbnails). |
| video_duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Video duration for videos. |

## Тип

[MessageExtendedMedia](/type/MessageExtendedMedia/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
