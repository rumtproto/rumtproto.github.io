---
title: "messageReplyStoryHeader (конструктор)"
original: "https://core.telegram.org/constructor/messageReplyStoryHeader"
section: ref
kind: constructor
layout: layout.njk
---

# messageReplyStoryHeader

*Конструктор из схемы TL.*

> Represents a reply to a [story](https://core.telegram.org/api/stories)

## Определение TL

```
messageReplyStoryHeader#e5af939 peer:Peer story_id:int = MessageReplyHeader;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Sender of the story. |
| story_id | [int](/type/int/) | Story ID |

## Тип

[MessageReplyHeader](/type/MessageReplyHeader/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
