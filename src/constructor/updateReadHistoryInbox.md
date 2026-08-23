---
title: "updateReadHistoryInbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadHistoryInbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadHistoryInbox

*Конструктор из схемы TL.*

> Incoming messages were read

## Определение TL

```
updateReadHistoryInbox#9e84bc99 flags:# folder_id:flags.0?int peer:Peer top_msg_id:flags.1?int max_id:int still_unread_count:int pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| peer | [Peer](/type/Peer/) | Peer |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If set, the messages were read only within the specified [bot forum topic »](https://core.telegram.org/api/forum#bot-forums). |
| max_id | [int](/type/int/) | Maximum ID of messages read |
| still_unread_count | [int](/type/int/) | Number of messages that are still unread |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
