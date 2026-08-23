---
title: "messageActionChatMigrateTo (конструктор)"
original: "https://core.telegram.org/constructor/messageActionChatMigrateTo"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionChatMigrateTo

*Конструктор из схемы TL.*

> Indicates the chat was [migrated](https://core.telegram.org/api/channel) to the specified supergroup

## Определение TL

```
messageActionChatMigrateTo#e1037f92 channel_id:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | The supergroup it was migrated to |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
