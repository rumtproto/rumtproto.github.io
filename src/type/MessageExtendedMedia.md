---
title: "MessageExtendedMedia (тип)"
original: "https://core.telegram.org/type/MessageExtendedMedia"
section: ref
kind: type
layout: layout.njk
---

# MessageExtendedMedia

*Тип из схемы TL.*

> [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info.

## Определение TL

```
messageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;
messageExtendedMedia#ee479c64 media:MessageMedia = MessageExtendedMedia;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageExtendedMediaPreview](/constructor/messageExtendedMediaPreview/) | Paid media preview for not yet purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info. |
| [messageExtendedMedia](/constructor/messageExtendedMedia/) | Already purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info. |

## Related pages

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
