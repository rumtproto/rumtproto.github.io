---
title: "ChannelParticipantsFilter (тип)"
original: "https://core.telegram.org/type/ChannelParticipantsFilter"
section: ref
kind: type
layout: layout.njk
---

# ChannelParticipantsFilter

*Тип из схемы TL.*

> Filter for fetching channel participants

## Определение TL

```
channelParticipantsRecent#de3f3c79 = ChannelParticipantsFilter;
channelParticipantsAdmins#b4608969 = ChannelParticipantsFilter;
channelParticipantsKicked#a3b54985 q:string = ChannelParticipantsFilter;
channelParticipantsBots#b0d1865b = ChannelParticipantsFilter;
channelParticipantsBanned#1427a5e1 q:string = ChannelParticipantsFilter;
channelParticipantsSearch#656ac4b q:string = ChannelParticipantsFilter;
channelParticipantsContacts#bb6ae88d q:string = ChannelParticipantsFilter;
channelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelParticipantsRecent](/constructor/channelParticipantsRecent/) | Fetch only recent participants |
| [channelParticipantsAdmins](/constructor/channelParticipantsAdmins/) | Fetch only admin participants |
| [channelParticipantsKicked](/constructor/channelParticipantsKicked/) | Fetch only kicked participants |
| [channelParticipantsBots](/constructor/channelParticipantsBots/) | Fetch only bot participants |
| [channelParticipantsBanned](/constructor/channelParticipantsBanned/) | Fetch only banned participants |
| [channelParticipantsSearch](/constructor/channelParticipantsSearch/) | Query participants by name |
| [channelParticipantsContacts](/constructor/channelParticipantsContacts/) | Fetch only participants that are also contacts |
| [channelParticipantsMentions](/constructor/channelParticipantsMentions/) | This filter is used when looking for supergroup members to mention. This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific [thread](https://core.telegram.org/api/threads) through the [comment section](https://core.telegram.org/api/threads#channel-comments) of a channel. |
