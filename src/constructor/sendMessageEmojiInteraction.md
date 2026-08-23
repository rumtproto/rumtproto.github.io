---
title: "sendMessageEmojiInteraction (конструктор)"
original: "https://core.telegram.org/constructor/sendMessageEmojiInteraction"
section: ref
kind: constructor
layout: layout.njk
---

# sendMessageEmojiInteraction

*Конструктор из схемы TL.*

> User has clicked on an animated emoji triggering a [reaction, click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions).

## Определение TL

```
sendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoticon | [string](/type/string/) | Emoji |
| msg_id | [int](/type/int/) | Message ID of the animated emoji that was clicked |
| interaction | [DataJSON](/type/DataJSON/) | A JSON object with interaction info, [click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions) |

## Тип

[SendMessageAction](/type/SendMessageAction/)

## Related pages

#### [Animated Emojis](https://core.telegram.org/api/animated-emojis)

Graphical telegram clients should transform emojis into their respective animated version.
