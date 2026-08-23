---
title: "messages.viewSponsoredMessage (метод)"
original: "https://core.telegram.org/method/messages.viewSponsoredMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.viewSponsoredMessage

*Метод из схемы TL.*

> Mark a specific [sponsored message »](https://core.telegram.org/api/sponsored-messages) as read

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [bytes](/type/bytes/) | The ad's unique ID. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
