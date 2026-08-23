---
title: "channelAdminLogEventActionToggleAntiSpam (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionToggleAntiSpam"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionToggleAntiSpam

*Конструктор из схемы TL.*

> [Native antispam](https://core.telegram.org/api/antispam) functionality was enabled or disabled.

## Определение TL

```
channelAdminLogEventActionToggleAntiSpam#64f36dfc new_value:Bool = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| new_value | [Bool](/type/Bool/) | Whether antispam functionality was enabled or disabled. |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Native antispam system](https://core.telegram.org/api/antispam)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.
