---
title: "phone.ExportedGroupCallInvite"
original: "https://core.telegram.org/type/phone.ExportedGroupCallInvite"
section: ref
kind: type
description: "Экспортированное приглашение в групповой звонок."
layout: layout.njk
---

# phone.ExportedGroupCallInvite

Экспортированное приглашение в групповой звонок.

```
phone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;

---functions---

phone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.exportedGroupCallInvite">phone.exportedGroupCallInvite</a></td><td>Приглашение в групповой звонок или на трансляцию</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.exportGroupCallInvite">phone.exportGroupCallInvite</a></td><td>Получить пригласительную ссылку на публичный <a href="/api/group-calls#video-chats-livestreams">видеочат или трансляцию »</a>.<br><br>Участники и подписчики, не являющиеся администраторами, могут экспортировать ссылку только без <code>can_self_unmute</code>. Задать <code>can_self_unmute</code> и экспортировать ссылку, позволяющую пользователям говорить, могут только администраторы группового звонка.<br><br>Нельзя использовать для видеочатов и трансляций, связанных с частными группами и каналами, для <a href="/api/group-calls#conference-calls">конференций »</a> или <a href="/api/group-calls#live-stories">прямых эфиров историй »</a>.</td></tr></tbody></table>
