---
title: "messages.getSavedReactionTags (метод)"
original: "https://core.telegram.org/method/messages.getSavedReactionTags"
section: ref
kind: method
layout: layout.njk
---

# messages.getSavedReactionTags

*Метод из схемы TL.*

> Fetch the full list of [saved message tags](https://core.telegram.org/api/saved-messages#tags) created by the user.

## Определение TL

```
messages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;
---functions---
messages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If set, returns tags only used in the specified [saved message dialog](https://core.telegram.org/api/saved-messages#saved-message-dialogs). |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.SavedReactionTags](/type/messages.SavedReactionTags/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
