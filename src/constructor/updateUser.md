---
title: "updateUser (конструктор)"
original: "https://core.telegram.org/constructor/updateUser"
section: ref
kind: constructor
layout: layout.njk
---

# updateUser

*Конструктор из схемы TL.*

> User ([user](/constructor/user/) and/or [userFull](/constructor/userFull/)) information was updated.
> This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [user](/constructor/user/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually.
> However, full peer information will not come bundled in updates, so the full peer cache ([userFull](/constructor/userFull/)) must be invalidated for `user_id` when receiving this update.

## Определение TL

```
updateUser#20529438 user_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |

## Тип

[Update](/type/Update/)

## Related pages

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers).

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Updates](/constructor/updates/)

Full constructor of updates

#### [updatesCombined](/constructor/updatesCombined/)

Constructor for a group of updates.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
