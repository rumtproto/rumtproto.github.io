---
title: "messages.getSearchResultsCalendar (метод)"
original: "https://core.telegram.org/method/messages.getSearchResultsCalendar"
section: ref
kind: method
layout: layout.njk
---

# messages.getSearchResultsCalendar

*Метод из схемы TL.*

> Returns information about the next messages of the specified type in the chat split by days.
> Returns the results in reverse chronological order.  
> Can return partial results for the last returned day.

## Определение TL

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;
---functions---
messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer where to search |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPeer](/type/InputPeer/) | Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. |
| filter | [MessagesFilter](/type/MessagesFilter/) | Message filter, [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/), [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) filters are not supported by this method. |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_date | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |

## Результат

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/)

Filter is absent.

#### [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/)

Return only messages where the current user was [mentioned](https://core.telegram.org/api/mentions).

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
