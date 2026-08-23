---
title: "messageMediaPaidMedia (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaPaidMedia"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaPaidMedia

*Конструктор из схемы TL.*

> [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info.

## Определение TL

```
messageMediaPaidMedia#a8852491 stars_amount:long extended_media:Vector<MessageExtendedMedia> = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stars_amount | [long](/type/long/) | The price of the media in [Telegram Stars](https://core.telegram.org/api/stars). |
| extended_media | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageExtendedMedia](/type/MessageExtendedMedia/)> | Either the paid-for media, or super low resolution media previews if the media wasn't purchased yet, [see here »](https://core.telegram.org/api/paid-media#viewing-paid-media) for more info. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
