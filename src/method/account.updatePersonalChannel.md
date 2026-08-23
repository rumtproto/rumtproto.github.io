---
title: "account.updatePersonalChannel (метод)"
original: "https://core.telegram.org/method/account.updatePersonalChannel"
section: ref
kind: method
layout: layout.njk
---

# account.updatePersonalChannel

*Метод из схемы TL.*

> Associate (or remove) a personal [channel »](https://core.telegram.org/api/channel), that will be listed on our personal [profile page »](https://core.telegram.org/api/profile#personal-channel).
> Changing it will emit an [updateUser](/constructor/updateUser/) update.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updatePersonalChannel#d94305e0 channel:InputChannel = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The channel, pass [inputChannelEmpty](/constructor/inputChannelEmpty/) to remove it. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PUBLIC_BROADCAST_EXPECTED | channel only accepts a channel, but a supergroup was passed. |

## Related pages

#### [inputChannelEmpty](/constructor/inputChannelEmpty/)

Represents the absence of a channel

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!

#### [updateUser](/constructor/updateUser/)

User ([user](/constructor/user/) and/or [userFull](/constructor/userFull/)) information was updated.

This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [user](/constructor/user/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually.

However, full peer information will not come bundled in updates, so the full peer cache ([userFull](/constructor/userFull/)) must be invalidated for `user_id` when receiving this update.
