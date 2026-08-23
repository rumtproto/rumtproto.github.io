---
title: "messageActionNewCreatorPending (конструктор)"
original: "https://core.telegram.org/constructor/messageActionNewCreatorPending"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionNewCreatorPending

*Конструктор из схемы TL.*

> Service message: emitted to a supergroup when the [group/channel creator leaves the group »](https://core.telegram.org/api/channel#leaving-groups-channels), indicating that ownership transfer is pending. The `new_creator_id` user will become the new owner after 7 days if the old owner does not rejoin.
> Sent from the user ID of the old owner.

## Определение TL

```
messageActionNewCreatorPending#b07ed085 new_creator_id:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| new_creator_id | [long](/type/long/) | The ID of the user who will become the new owner of the group/channel after 7 days if the old owner does not rejoin. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
