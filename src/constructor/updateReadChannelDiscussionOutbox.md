---
title: "updateReadChannelDiscussionOutbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionOutbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadChannelDiscussionOutbox

*Конструктор из схемы TL.*

> Outgoing comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read

## Определение TL

```
updateReadChannelDiscussionOutbox#695c9e7c channel_id:long top_msg_id:int read_max_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | [Supergroup ID](https://core.telegram.org/api/channel) |
| top_msg_id | [int](/type/int/) | ID of the group message that started the [thread](https://core.telegram.org/api/threads) |
| read_max_id | [int](/type/int/) | Message ID of latest read outgoing message for this [thread](https://core.telegram.org/api/threads) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
