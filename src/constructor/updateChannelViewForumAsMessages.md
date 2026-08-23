---
title: "updateChannelViewForumAsMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelViewForumAsMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelViewForumAsMessages

*Конструктор из схемы TL.*

> Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.  
> This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

## Определение TL

```
updateChannelViewForumAsMessages#7b68920 channel_id:long enabled:Bool = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | The forum ID |
| enabled | [Bool](/type/Bool/) | The new value of the toggle. |

## Тип

[Update](/type/Update/)

## Related pages

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method.

Invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [dialog](/constructor/dialog/)

Chat

#### [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/)

Users may also choose to display messages from all topics as if they were sent to a normal group, using a "View as messages" setting in the local client.  
This setting only affects the current account, and is synced to other logged in sessions using the [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) method; invoking this method will update the value of the `view_forum_as_messages` flag of [channelFull](/constructor/channelFull/) or [dialog](/constructor/dialog/) and emit an [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).
