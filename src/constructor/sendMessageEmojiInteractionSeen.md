---
title: "sendMessageEmojiInteractionSeen (конструктор)"
original: "https://core.telegram.org/constructor/sendMessageEmojiInteractionSeen"
section: ref
kind: constructor
layout: layout.njk
---

# sendMessageEmojiInteractionSeen

*Конструктор из схемы TL.*

> User is watching an animated emoji reaction triggered by another user, [click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions).

## Определение TL

```
sendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoticon | [string](/type/string/) | Emoji |

## Тип

[SendMessageAction](/type/SendMessageAction/)

## Related pages

#### [Animated Emojis](https://core.telegram.org/api/animated-emojis)

Graphical telegram clients should transform emojis into their respective animated version.
