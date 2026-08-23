---
title: "messages.AffectedHistory (тип)"
original: "https://core.telegram.org/type/messages.AffectedHistory"
section: ref
kind: type
layout: layout.njk
---

# messages.AffectedHistory

*Тип из схемы TL.*

> Object contains info on affected part of communication history with the user or in a chat.

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;

---functions---

messages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
messages.unpinAllMessages#62dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;

channels.deleteParticipantHistory#367544db channel:InputChannel participant:InputPeer = messages.AffectedHistory;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.affectedHistory](/constructor/messages.affectedHistory/) | Affected part of communication history with the user or in a chat. |

## Методы

| Method | Описание |
|---|---|
| [messages.deleteHistory](/method/messages.deleteHistory/) | Deletes communication history. |
| [messages.readMentions](/method/messages.readMentions/) | Mark mentions as read; can be used in [forums](https://core.telegram.org/api/forum) but cannot be used in [monoforums](https://core.telegram.org/api/monoforum). |
| [messages.unpinAllMessages](/method/messages.unpinAllMessages/) | [Unpin](https://core.telegram.org/api/pin) all pinned messages |
| [messages.readReactions](/method/messages.readReactions/) | Mark [message reactions »](https://core.telegram.org/api/reactions) as read |
| [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/) | Deletes messages from a [monoforum topic »](https://core.telegram.org/api/monoforum), or deletes messages forwarded from a specific peer to [saved messages »](https://core.telegram.org/api/saved-messages). |
| [messages.deleteTopicHistory](/method/messages.deleteTopicHistory/) | Delete message history of a [forum topic](https://core.telegram.org/api/forum) |
| [messages.readPollVotes](https://core.telegram.org/method/messages.readPollVotes) | Mark all [unread poll votes »](https://core.telegram.org/api/poll#unread-poll-votes) in a chat as read |
| [channels.deleteParticipantHistory](/method/channels.deleteParticipantHistory/) | Delete all messages sent by a specific participant of a given supergroup |
