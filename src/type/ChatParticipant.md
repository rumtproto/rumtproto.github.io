---
title: "ChatParticipant"
original: "https://core.telegram.org/type/ChatParticipant"
section: ref
kind: type
description: "Сведения об участнике группы."
layout: layout.njk
---

# ChatParticipant

Сведения об участнике группы.

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipant">chatParticipant</a></td><td>Участник <a href="/api/channel#basic-groups">обычной группы</a> (неприменимо к супергруппам).</td></tr><tr><td><a href="/constructor/chatParticipantCreator">chatParticipantCreator</a></td><td>Представляет создателя <a href="/api/channel#basic-groups">обычной группы »</a></td></tr><tr><td><a href="/constructor/chatParticipantAdmin">chatParticipantAdmin</a></td><td>Администратор <a href="/api/channel#basic-groups">обычной группы</a> (неприменимо к супергруппам).</td></tr></tbody></table>
