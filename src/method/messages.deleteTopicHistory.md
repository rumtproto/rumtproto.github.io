---
title: "messages.deleteTopicHistory (метод)"
original: "https://core.telegram.org/method/messages.deleteTopicHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteTopicHistory

*Метод из схемы TL.*

> Delete message history of a [forum topic](https://core.telegram.org/api/forum)

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located. |
| top_msg_id | [int](/type/int/) | Topic ID |

## Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
