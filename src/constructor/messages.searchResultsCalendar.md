---
title: "messages.searchResultsCalendar (конструктор)"
original: "https://core.telegram.org/constructor/messages.searchResultsCalendar"
section: ref
kind: constructor
layout: layout.njk
---

# messages.searchResultsCalendar

*Конструктор из схемы TL.*

> Information about found messages sent on a specific day

## Определение TL

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inexact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, indicates that the results may be inexact |
| count | [int](/type/int/) | Total number of results matching query |
| min_date | [int](/type/int/) | Starting timestamp of attached messages |
| min_msg_id | [int](/type/int/) | Ending timestamp of attached messages |
| offset_id_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Indicates the absolute position of messages[0] within the total result set with count count. This is useful, for example, if we need to display a progress/total counter (like photo 134 of 200, for all media in a chat, we could simply use photo ${offset_id_offset} of ${count}. |
| periods | [Vector](https://core.telegram.org/type/Vector%20t)<[SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)> | Used to split the messages by days: multiple [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/) constructors are returned, each containing information about the first, last and total number of messages matching the filter that were sent on a specific day. This information can be easily used to split the returned messages by day. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | Messages |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

## Related pages

#### [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.
