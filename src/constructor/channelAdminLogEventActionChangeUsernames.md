---
title: "channelAdminLogEventActionChangeUsernames (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeUsernames"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangeUsernames

*Конструктор из схемы TL.*

> The list of usernames associated with the channel was changed

## Определение TL

```
channelAdminLogEventActionChangeUsernames#f04fb3a9 prev_value:Vector<string> new_value:Vector<string> = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Previous set of usernames |
| new_value | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | New set of usernames |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)
