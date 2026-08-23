---
title: "updateChannelTooLong (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelTooLong"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelTooLong

*Конструктор из схемы TL.*

> There are new updates in the specified channel, the client must fetch them manually by invoking [updates.getChannelDifference](/method/updates.getChannelDifference/) as specified in the [documentation »](/api/updates/).
> If the channel's PTS isn't currently stored in the database (i.e. we joined this channel on another client while the current client was offline), start fetching from the specified pts.
> Does **not** necessarily indicate the [channel message box size limit was reached](https://core.telegram.org/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket.

## Определение TL

```
updateChannelTooLong#108d941f flags:# channel_id:long pts:flags.0?int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel_id | [long](/type/long/) | The channel |
| pts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | The [PTS](/api/updates/). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updates.getChannelDifference](/method/updates.getChannelDifference/)

Returns the difference between the current state of updates of a certain channel and transmitted.
