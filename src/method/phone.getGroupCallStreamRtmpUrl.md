---
title: "phone.getGroupCallStreamRtmpUrl"
original: "https://core.telegram.org/method/phone.getGroupCallStreamRtmpUrl"
section: ref
kind: method
description: "Получить URL для RTMP и ключ потока, используемые единственным внешним вещателем, который публикует весь звук и видео для видеочата, трансляции или прямой истории в режиме RTMP."
layout: layout.njk
---

# phone.getGroupCallStreamRtmpUrl

Получить URL для RTMP и ключ потока, используемые единственным внешним вещателем, который публикует весь звук и видео для видеочата, трансляции или прямой истории в режиме RTMP.

Полный порядок действий см. [здесь »](/api/group-calls/#creating-and-publishing-an-rtmp-livestream).

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;
---functions---
phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>live_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Получить учётные данные для прямой истории в режиме RTMP, а не для видеочата или трансляции</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, который будет вести видеочат, трансляцию или прямую историю в режиме RTMP</td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Аннулировать ли прежний ключ потока и создать новый вместо возврата существующего ключа</td></tr></tbody></table>

### Результат

[phone.GroupCallStreamRtmpUrl](/type/phone.GroupCallStreamRtmpUrl/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
