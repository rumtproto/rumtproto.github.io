---
title: "messageMediaVideoStream"
original: "https://core.telegram.org/constructor/messageMediaVideoStream"
section: ref
kind: constructor
description: "Определяет активный групповой звонок, связанный с прямой историей »."
layout: layout.njk
---

# messageMediaVideoStream

Определяет активный групповой звонок, связанный с [прямой историей »](/api/group-calls/#live-stories).

```
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>rtmp_stream</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Использует ли прямая история <a href="/api/group-calls#stream-mode">режим трансляции RTMP »</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Активный групповой звонок прямого эфира истории</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
