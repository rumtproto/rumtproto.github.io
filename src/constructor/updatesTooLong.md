---
title: "updatesTooLong (конструктор)"
original: "https://core.telegram.org/constructor/updatesTooLong"
section: ref
kind: constructor
layout: layout.njk
---

# updatesTooLong

*Конструктор из схемы TL.*

> The number of queued updates in the common message box is too large to be delivered passively through the socket, invoke [updates.getDifference](/method/updates.getDifference/) to fetch the difference as specified in the [documentation »](/api/updates/).
> Does **not** necessarily indicate the [message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
```

## Параметры

This constructor does not require any parameters.

## Тип

[Updates](/type/Updates/)

## Related pages

#### [updates.getDifference](/method/updates.getDifference/)

Get new [updates](/api/updates/).

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
