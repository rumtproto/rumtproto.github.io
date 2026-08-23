---
title: "botCommandScopePeerUser (конструктор)"
original: "https://core.telegram.org/constructor/botCommandScopePeerUser"
section: ref
kind: constructor
layout: layout.njk
---

# botCommandScopePeerUser

*Конструктор из схемы TL.*

> The specified bot commands will be valid only for a specific user in the specified [group or supergroup](https://core.telegram.org/api/channel).

## Определение TL

```
botCommandScopePeerUser#a1321f3 peer:InputPeer user_id:InputUser = BotCommandScope;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat |
| user_id | [InputUser](/type/InputUser/) | The user |

## Тип

[BotCommandScope](/type/BotCommandScope/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
