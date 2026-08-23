---
title: "updates.channelDifferenceTooLong (конструктор)"
original: "https://core.telegram.org/constructor/updates.channelDifferenceTooLong"
section: ref
kind: constructor
layout: layout.njk
---

# updates.channelDifferenceTooLong

*Конструктор из схемы TL.*

> The passed `pts` is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel.
> For supergroups/channels, this usually happens for updates older than `latestPts - 100000` (though do not rely on this value, it's a server-side implementation detail that may change, and should not be used by clients in any way).

## Определение TL

```
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| final | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether there are more updates that must be fetched (always set) |
| timeout | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Clients are supposed to refetch the channel difference after timeout seconds have elapsed |
| dialog | [Dialog](/type/Dialog/) | Dialog containing the latest [PTS](/api/updates/) that can be used to reset the channel state |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | The latest messages (not starting from the passed pts, just the latest messages). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats from messages |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users from messages |

## Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
