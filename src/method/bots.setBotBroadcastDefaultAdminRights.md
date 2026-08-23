---
title: "bots.setBotBroadcastDefaultAdminRights (метод)"
original: "https://core.telegram.org/method/bots.setBotBroadcastDefaultAdminRights"
section: ref
kind: method
layout: layout.njk
---

# bots.setBotBroadcastDefaultAdminRights

*Метод из схемы TL.*

> Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to channels, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotBroadcastDefaultAdminRights#788464e1 admin_rights:ChatAdminRights = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| admin_rights | [ChatAdminRights](/type/ChatAdminRights/) | Admin rights |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RIGHTS_NOT_MODIFIED | The new admin rights are equal to the old rights, no change was made. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
