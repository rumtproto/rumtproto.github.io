---
title: "channelParticipantBanned"
original: "https://core.telegram.org/constructor/channelParticipantBanned"
section: ref
kind: constructor
description: "Заблокированный/исключённый пользователь"
layout: layout.njk
---

# channelParticipantBanned

Заблокированный/исключённый пользователь

```
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Покинул ли пользователь группу</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Заблокированный пир</td></tr><tr><td><strong>kicked_by</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь был исключён указанным администратором</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пользователь присоединился к группе</td></tr><tr><td><strong>banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights">ChatBannedRights</a></td><td>Ограниченные <a href="/api/rights">права</a></td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td><a href="/api/rank">Звание »</a> участника.</td></tr></tbody></table>

### Тип

[ChannelParticipant](/type/ChannelParticipant/)

### Связанные страницы

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
