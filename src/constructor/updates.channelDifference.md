---
title: "updates.channelDifference (конструктор)"
original: "https://core.telegram.org/constructor/updates.channelDifference"
section: ref
kind: constructor
layout: layout.njk
---

# updates.channelDifference

*Конструктор из схемы TL.*

> The new updates

## Определение TL

```
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| final | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether there are more updates to be fetched using getDifference, starting from the provided pts |
| pts | [int](/type/int/) | The [PTS](/api/updates/) from which to start getting updates the next time |
| timeout | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Clients are supposed to refetch the channel difference after timeout seconds have elapsed, if the user is [currently viewing the chat, see here »](https://core.telegram.org/api/updates/#subscribing-to-updates-of-channels-supergroups) for more info. |
| new_messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | New messages |
| other_updates | [Vector](https://core.telegram.org/type/Vector%20t)<[Update](/type/Update/)> | Other updates |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |

## Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
