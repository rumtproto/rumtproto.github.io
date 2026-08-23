---
title: "messages.Reactions (тип)"
original: "https://core.telegram.org/type/messages.Reactions"
section: ref
kind: type
layout: layout.njk
---

# messages.Reactions

*Тип из схемы TL.*

> A set of [message reactions](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;

---functions---

messages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;
messages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;
messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.reactionsNotModified](/constructor/messages.reactionsNotModified/) | The server-side list of [message reactions](https://core.telegram.org/api/reactions) hasn't changed |
| [messages.reactions](/constructor/messages.reactions/) | List of [message reactions](https://core.telegram.org/api/reactions) |

## Методы

| Method | Описание |
|---|---|
| [messages.getTopReactions](/method/messages.getTopReactions/) | Got popular [message reactions](https://core.telegram.org/api/reactions) |
| [messages.getRecentReactions](/method/messages.getRecentReactions/) | Get recently used [message reactions](https://core.telegram.org/api/reactions) |
| [messages.getDefaultTagReactions](/method/messages.getDefaultTagReactions/) | Fetch a default recommended list of [saved message tag reactions](https://core.telegram.org/api/saved-messages#tags). |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
