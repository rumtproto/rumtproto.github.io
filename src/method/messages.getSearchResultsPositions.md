---
title: "messages.getSearchResultsPositions (метод)"
original: "https://core.telegram.org/method/messages.getSearchResultsPositions"
section: ref
kind: method
layout: layout.njk
---

# messages.getSearchResultsPositions

*Метод из схемы TL.*

> Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation.
> Returns the results in reverse chronological order (i.e., in order of decreasing message\_id).

## Определение TL

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;
---functions---
messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer where to search |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPeer](/type/InputPeer/) | Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. |
| filter | [MessagesFilter](/type/MessagesFilter/) | Message filter, [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/), [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) filters are not supported by this method. |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.SearchResultsPositions](/type/messages.SearchResultsPositions/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
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
