---
title: "updateChannelReadMessagesContents (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelReadMessagesContents"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelReadMessagesContents

*Конструктор из схемы TL.*

> The specified [channel/supergroup](https://core.telegram.org/api/channel) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/))

## Определение TL

```
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel_id | [long](/type/long/) | [Channel/supergroup](https://core.telegram.org/api/channel) ID |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Forum topic ID](https://core.telegram.org/api/forum#forum-topics). |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | If set, the messages were read within the specified [monoforum topic »](https://core.telegram.org/api/monoforum). |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages that were read |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [channels.readMessageContents](/method/channels.readMessageContents/)

Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read, emitting an [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).
