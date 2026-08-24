---
title: "ChannelParticipant"
original: "https://core.telegram.org/type/ChannelParticipant"
section: ref
kind: type
description: "Участник канала"
layout: layout.njk
---

# ChannelParticipant

Участник канала

```
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channelParticipant">channelParticipant</a></td><td>Участник канала или супергруппы</td></tr><tr><td><a href="/constructor/channelParticipantSelf">channelParticipantSelf</a></td><td>Я сам</td></tr><tr><td><a href="/constructor/channelParticipantCreator">channelParticipantCreator</a></td><td>Создатель канала или супергруппы</td></tr><tr><td><a href="/constructor/channelParticipantAdmin">channelParticipantAdmin</a></td><td>Администратор</td></tr><tr><td><a href="/constructor/channelParticipantBanned">channelParticipantBanned</a></td><td>Заблокированный/исключённый пользователь</td></tr><tr><td><a href="/constructor/channelParticipantLeft">channelParticipantLeft</a></td><td>Участник, покинувший канал или супергруппу</td></tr></tbody></table>
