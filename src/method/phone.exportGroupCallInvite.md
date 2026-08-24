---
title: "phone.exportGroupCallInvite"
original: "https://core.telegram.org/method/phone.exportGroupCallInvite"
section: ref
kind: method
description: "Получить пригласительную ссылку на публичный видеочат или трансляцию »."
layout: layout.njk
---

# phone.exportGroupCallInvite

Получить пригласительную ссылку на публичный [видеочат или трансляцию »](/api/group-calls/#video-chats-livestreams).

Участники и подписчики, не являющиеся администраторами, могут экспортировать ссылку без указания `can_self_unmute`. Только администраторы группового звонка могут задать `can_self_unmute`, чтобы экспортировать ссылку, разрешающую пользователям говорить.

Нельзя использовать для видеочатов/трансляций, связанных с приватными группами/каналами, для [конференц-звонков »](/api/group-calls/#conference-calls) или [прямых эфиров в историях »](/api/group-calls/#live-stories).

```
phone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;
---functions---
phone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_self_unmute</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Только для публичных видеочатов/трансляций и только для администраторов группового звонка: разрешить пользователям, вошедшим по этой ссылке, говорить без явного запроса разрешения, например без поднятия руки.</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Публичный <a href="/api/group-calls#video-chats-livestreams">видеочат или трансляция »</a></td></tr></tbody></table>

### Результат

[phone.ExportedGroupCallInvite](/type/phone.ExportedGroupCallInvite/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>403</td><td>PUBLIC_CHANNEL_MISSING</td><td>Экспортировать пригласительные ссылки на групповой звонок можно только для публичных чатов или каналов.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
