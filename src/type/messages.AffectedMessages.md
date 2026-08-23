---
title: "Messages.AffectedMessages (тип)"
original: "https://core.telegram.org/type/messages.AffectedMessages"
section: ref
kind: type
layout: layout.njk
---

# Messages.AffectedMessages

*Тип из схемы TL.*

> Messages affected by changes

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;

---functions---

messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
messages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;

channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.affectedMessages](/constructor/messages.affectedMessages/) | Events affected by operation |

## Методы

| Method | Описание |
|---|---|
| [messages.readHistory](/method/messages.readHistory/) | Marks message history as read. |
| [messages.deleteMessages](/method/messages.deleteMessages/) | Deletes messages by their identifiers. |
| [messages.readMessageContents](/method/messages.readMessageContents/) | Notifies the sender about the recipient having listened a voice message or watched a video, emitting an [updateReadMessagesContents](/constructor/updateReadMessagesContents/). |
| [channels.deleteMessages](/method/channels.deleteMessages/) | Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel) |
