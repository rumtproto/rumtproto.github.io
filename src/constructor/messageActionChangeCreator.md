---
title: "messageActionChangeCreator (конструктор)"
original: "https://core.telegram.org/constructor/messageActionChangeCreator"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionChangeCreator

*Конструктор из схемы TL.*

> Service message: emitted to a supergroup when [ownership transfer completes after the old owner left the group »](https://core.telegram.org/api/channel#leaving-groups-channels) (7 days after the old owner left without rejoining), indicating that ownership has been transferred to a new owner.
> Sent from the user ID of the old owner.

## Определение TL

```
messageActionChangeCreator#e188503b new_creator_id:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| new_creator_id | [long](/type/long/) | The ID of the user who became the new owner of the group/channel. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
