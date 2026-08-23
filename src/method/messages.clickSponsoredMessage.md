---
title: "messages.clickSponsoredMessage (метод)"
original: "https://core.telegram.org/method/messages.clickSponsoredMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.clickSponsoredMessage

*Метод из схемы TL.*

> Informs the server that the user has interacted with a sponsored message in [one of the ways listed here »](https://core.telegram.org/api/sponsored-messages#clicking-on-sponsored-messages).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | The user clicked on the media |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | The user expanded the video to full screen, and then clicked on it. |
| random_id | [bytes](/type/bytes/) | The ad's unique ID. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
