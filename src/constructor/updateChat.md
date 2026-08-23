---
title: "updateChat (конструктор)"
original: "https://core.telegram.org/constructor/updateChat"
section: ref
kind: constructor
layout: layout.njk
---

# updateChat

*Конструктор из схемы TL.*

> Chat ([chat](/constructor/chat/) and/or [chatFull](/constructor/chatFull/)) information was updated.
> This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [chat](/constructor/chat/), that should be applied [as usual »](https://core.telegram.org/api/peers), **without** re-fetching the info manually.
> However, full peer information will not come bundled in updates, so the full peer cache ([chatFull](/constructor/chatFull/)) must be invalidated for `chat_id` when receiving this update.

## Определение TL

```
updateChat#f89a6a4e chat_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Chat ID |

## Тип

[Update](/type/Update/)

## Related pages

#### [chat](/constructor/chat/)

Info about a group.

When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](https://core.telegram.org/api/peers).

#### [chatFull](/constructor/chatFull/)

Full info about a [basic group](https://core.telegram.org/api/channel#basic-groups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Updates](/constructor/updates/)

Full constructor of updates

#### [updatesCombined](/constructor/updatesCombined/)

Constructor for a group of updates.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
