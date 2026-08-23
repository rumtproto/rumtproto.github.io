---
title: "messages.getSavedDialogs (метод)"
original: "https://core.telegram.org/method/messages.getSavedDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.getSavedDialogs

*Метод из схемы TL.*

> Returns the current [saved dialog list »](https://core.telegram.org/api/saved-messages) or [monoforum topic list »](https://core.telegram.org/api/monoforum).

## Определение TL

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exclude_pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Exclude pinned dialogs |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | If set, fetches the topic list of the passed monoforum, otherwise fetches the saved dialog list. |
| offset_date | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (top_message ID used for pagination) |
| offset_peer | [InputPeer](/type/InputPeer/) | [Offset peer for pagination](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Number of list elements to be returned |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
