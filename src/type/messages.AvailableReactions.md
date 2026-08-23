---
title: "messages.AvailableReactions (тип)"
original: "https://core.telegram.org/type/messages.AvailableReactions"
section: ref
kind: type
layout: layout.njk
---

# messages.AvailableReactions

*Тип из схемы TL.*

> Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;

---functions---

messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.availableReactionsNotModified](/constructor/messages.availableReactionsNotModified/) | No new reactions are available |
| [messages.availableReactions](/constructor/messages.availableReactions/) | Animations and metadata associated with [message reactions »](https://core.telegram.org/api/reactions) |

## Методы

| Method | Описание |
|---|---|
| [messages.getAvailableReactions](/method/messages.getAvailableReactions/) | Obtain available [message reactions »](https://core.telegram.org/api/reactions) |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
