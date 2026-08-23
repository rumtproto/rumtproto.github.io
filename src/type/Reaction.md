---
title: "Reaction (тип)"
original: "https://core.telegram.org/type/Reaction"
section: ref
kind: type
layout: layout.njk
---

# Reaction

*Тип из схемы TL.*

> [Message reaction](https://core.telegram.org/api/reactions)

## Определение TL

```
reactionEmpty#79f5d419 = Reaction;
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;
reactionPaid#523da4eb = Reaction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [reactionEmpty](/constructor/reactionEmpty/) | No reaction |
| [reactionEmoji](/constructor/reactionEmoji/) | Normal emoji message reaction |
| [reactionCustomEmoji](/constructor/reactionCustomEmoji/) | [Custom emoji](https://core.telegram.org/api/custom-emoji) message reaction |
| [reactionPaid](/constructor/reactionPaid/) | Represents a [paid Telegram Star reaction »](https://core.telegram.org/api/reactions#paid-reactions). |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
