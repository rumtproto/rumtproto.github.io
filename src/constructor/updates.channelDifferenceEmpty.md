---
title: "updates.channelDifferenceEmpty (конструктор)"
original: "https://core.telegram.org/constructor/updates.channelDifferenceEmpty"
section: ref
kind: constructor
layout: layout.njk
---

# updates.channelDifferenceEmpty

*Конструктор из схемы TL.*

> There are no new updates

## Определение TL

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| final | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether there are more updates that must be fetched (always false) |
| pts | [int](/type/int/) | The latest [PTS](/api/updates/) |
| timeout | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Clients are supposed to refetch the channel difference after timeout seconds have elapsed, if the user is [currently viewing the chat, see here »](https://core.telegram.org/api/updates/#subscribing-to-updates-of-channels-supergroups) for more info. |

## Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
