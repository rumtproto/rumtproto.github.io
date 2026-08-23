---
title: "ChannelParticipant (тип)"
original: "https://core.telegram.org/type/ChannelParticipant"
section: ref
kind: type
layout: layout.njk
---

# ChannelParticipant

*Тип из схемы TL.*

> Channel participant

## Определение TL

```
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelParticipant](/constructor/channelParticipant/) | Channel/supergroup participant |
| [channelParticipantSelf](/constructor/channelParticipantSelf/) | Myself |
| [channelParticipantCreator](/constructor/channelParticipantCreator/) | Channel/supergroup creator |
| [channelParticipantAdmin](/constructor/channelParticipantAdmin/) | Admin |
| [channelParticipantBanned](/constructor/channelParticipantBanned/) | Banned/kicked user |
| [channelParticipantLeft](/constructor/channelParticipantLeft/) | A participant that left the channel/supergroup |
