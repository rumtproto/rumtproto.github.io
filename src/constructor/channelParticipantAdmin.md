---
title: "channelParticipantAdmin"
original: "https://core.telegram.org/constructor/channelParticipantAdmin"
section: ref
kind: constructor
description: "Администратор"
layout: layout.njk
---

# channelParticipantAdmin

Администратор

```
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_edit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Может ли этот администратор назначать других администраторов с теми же правами?</td></tr><tr><td><strong>self</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это текущим пользователем</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя-администратора</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Пользователь, пригласивший администратора в канал или группу</td></tr><tr><td><strong>promoted_by</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, назначивший данного пользователя администратором</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пользователь присоединился</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights">ChatAdminRights</a></td><td><a href="/api/rights">Права</a> администратора</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td><a href="/api/rank">Звание »</a> участника; если не задано, по умолчанию используется «Admin».</td></tr></tbody></table>

### Тип

[ChannelParticipant](/type/ChannelParticipant/)

### Связанные страницы

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
