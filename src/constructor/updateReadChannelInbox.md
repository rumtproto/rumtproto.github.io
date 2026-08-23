---
title: "updateReadChannelInbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadChannelInbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadChannelInbox

*Конструктор из схемы TL.*

> Incoming messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read

## Определение TL

```
updateReadChannelInbox#922e6e10 flags:# folder_id:flags.0?int channel_id:long max_id:int still_unread_count:int pts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| channel_id | [long](/type/long/) | Channel/supergroup ID |
| max_id | [int](/type/int/) | Position up to which all incoming messages are read. |
| still_unread_count | [int](/type/int/) | Count of messages weren't read yet |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
