---
title: "messages.SavedReactionTags (тип)"
original: "https://core.telegram.org/type/messages.SavedReactionTags"
section: ref
kind: type
layout: layout.njk
---

# messages.SavedReactionTags

*Тип из схемы TL.*

> List of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user.

## Определение TL

```
messages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;

---functions---

messages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.savedReactionTagsNotModified](/constructor/messages.savedReactionTagsNotModified/) | The list of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user hasn't changed. |
| [messages.savedReactionTags](/constructor/messages.savedReactionTags/) | List of [reaction tag »](https://core.telegram.org/api/saved-messages#tags) names assigned by the user. |

## Методы

| Method | Описание |
|---|---|
| [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) | Fetch the full list of [saved message tags](https://core.telegram.org/api/saved-messages#tags) created by the user. |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
