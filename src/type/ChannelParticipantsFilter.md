---
title: "ChannelParticipantsFilter"
original: "https://core.telegram.org/type/ChannelParticipantsFilter"
section: ref
kind: type
description: "Фильтр для получения участников канала"
layout: layout.njk
---

# ChannelParticipantsFilter

Фильтр для получения участников канала

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channelParticipantsRecent">channelParticipantsRecent</a></td><td>Получить только недавних участников</td></tr><tr><td><a href="/constructor/channelParticipantsAdmins">channelParticipantsAdmins</a></td><td>Получить только участников-администраторов</td></tr><tr><td><a href="/constructor/channelParticipantsKicked">channelParticipantsKicked</a></td><td>Получить только исключённых участников</td></tr><tr><td><a href="/constructor/channelParticipantsBots">channelParticipantsBots</a></td><td>Получить только участников-ботов</td></tr><tr><td><a href="/constructor/channelParticipantsBanned">channelParticipantsBanned</a></td><td>Получить только заблокированных участников</td></tr><tr><td><a href="/constructor/channelParticipantsSearch">channelParticipantsSearch</a></td><td>Поиск участников по имени</td></tr><tr><td><a href="/constructor/channelParticipantsContacts">channelParticipantsContacts</a></td><td>Получить только участников из числа контактов</td></tr><tr><td><a href="/constructor/channelParticipantsMentions">channelParticipantsMentions</a></td><td>Этот фильтр используется при поиске участников супергруппы для упоминания.<br>Этот фильтр автоматически исключает анонимных администраторов и возвращает даже тех пользователей, которые не являются участниками, но ответили в определённом <a href="/api/threads">обсуждении</a> через <a href="/api/threads#channel-comments">раздел комментариев</a> канала.</td></tr></tbody></table>
