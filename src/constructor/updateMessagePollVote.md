---
title: "updateMessagePollVote (конструктор)"
original: "https://core.telegram.org/constructor/updateMessagePollVote"
section: ref
kind: constructor
layout: layout.njk
---

# updateMessagePollVote

*Конструктор из схемы TL.*

> A specific peer has voted in a poll (this update can only be received by a bot).

## Определение TL

```
updateMessagePollVote#24f40e77 poll_id:long peer:Peer options:Vector<bytes> qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| poll_id | [long](/type/long/) | Poll ID |
| peer | [Peer](/type/Peer/) | The peer that voted in the poll |
| options | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | Chosen option(s) |
| positions | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 0-based indices of the voted options within the answers vector, corresponding element-by-element to options |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
