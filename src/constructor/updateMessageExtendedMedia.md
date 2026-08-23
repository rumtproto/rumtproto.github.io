---
title: "updateMessageExtendedMedia (конструктор)"
original: "https://core.telegram.org/constructor/updateMessageExtendedMedia"
section: ref
kind: constructor
layout: layout.njk
---

# updateMessageExtendedMedia

*Конструктор из схемы TL.*

> You [bought a paid media »](https://core.telegram.org/api/paid-media): this update contains the revealed media.

## Определение TL

```
updateMessageExtendedMedia#d5a41724 peer:Peer msg_id:int extended_media:Vector<MessageExtendedMedia> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer where the paid media was posted |
| msg_id | [int](/type/int/) | ID of the message containing the paid media |
| extended_media | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageExtendedMedia](/type/MessageExtendedMedia/)> | Revealed media, contains only [messageExtendedMedia](/constructor/messageExtendedMedia/) constructors. |

## Тип

[Update](/type/Update/)

## Related pages

#### [messageExtendedMedia](/constructor/messageExtendedMedia/)

Already purchased paid media, [see here »](https://core.telegram.org/api/paid-media) for more info.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
