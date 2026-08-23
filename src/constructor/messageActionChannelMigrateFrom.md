---
title: "messageActionChannelMigrateFrom (конструктор)"
original: "https://core.telegram.org/constructor/messageActionChannelMigrateFrom"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionChannelMigrateFrom

*Конструктор из схемы TL.*

> Indicates the channel was [migrated](https://core.telegram.org/api/channel) from the specified chat

## Определение TL

```
messageActionChannelMigrateFrom#ea3948e9 title:string chat_id:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | The old chat title |
| chat_id | [long](/type/long/) | The old chat ID |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
