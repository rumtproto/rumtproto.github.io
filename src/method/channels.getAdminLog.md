---
title: "channels.getAdminLog (метод)"
original: "https://core.telegram.org/method/channels.getAdminLog"
section: ref
kind: method
layout: layout.njk
---

# channels.getAdminLog

*Метод из схемы TL.*

> Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;
---functions---
channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel | [InputChannel](/type/InputChannel/) | Channel |
| q | [string](/type/string/) | Search query, can be empty |
| events_filter | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/) | Event filter |
| admins | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | Only show events from these admins |
| max_id | [long](/type/long/) | Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) |
| min_id | [long](/type/long/) | Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[channels.AdminLogResults](/type/channels.AdminLogResults/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
