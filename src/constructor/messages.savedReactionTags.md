---
title: "messages.savedReactionTags (конструктор)"
original: "https://core.telegram.org/constructor/messages.savedReactionTags"
section: ref
kind: constructor
layout: layout.njk
---

# messages.savedReactionTags

*Конструктор из схемы TL.*

> List of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user.

## Определение TL

```
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| tags | [Vector](https://core.telegram.org/type/Vector%20t)<[SavedReactionTag](/type/SavedReactionTag/)> | Saved reaction tags. |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). Can also be manually regenerated, if needed, using the [custom algorithm specified here »](https://core.telegram.org/api/saved-messages#tags). |

## Тип

[messages.SavedReactionTags](/type/messages.SavedReactionTags/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
