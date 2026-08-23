---
title: "updateReadMonoForumInbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadMonoForumInbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadMonoForumInbox

*Конструктор из схемы TL.*

> Incoming messages in a [monoforum topic](https://core.telegram.org/api/monoforum) were read

## Определение TL

```
updateReadMonoForumInbox#77b0e372 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | ID of the monoforum. |
| saved_peer_id | [Peer](/type/Peer/) | Topic ID. |
| read_max_id | [int](/type/int/) | Position up to which all incoming messages are read. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
