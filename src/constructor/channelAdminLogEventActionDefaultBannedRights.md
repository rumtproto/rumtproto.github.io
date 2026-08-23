---
title: "channelAdminLogEventActionDefaultBannedRights (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionDefaultBannedRights"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionDefaultBannedRights

*Конструктор из схемы TL.*

> The default banned rights were modified

## Определение TL

```
channelAdminLogEventActionDefaultBannedRights#2df5fc0a prev_banned_rights:ChatBannedRights new_banned_rights:ChatBannedRights = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_banned_rights | [ChatBannedRights](/type/ChatBannedRights/) | Previous global [banned rights](https://core.telegram.org/api/rights) |
| new_banned_rights | [ChatBannedRights](/type/ChatBannedRights/) | New global [banned rights](https://core.telegram.org/api/rights). |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
