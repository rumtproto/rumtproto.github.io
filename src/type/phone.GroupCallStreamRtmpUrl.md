---
title: "phone.GroupCallStreamRtmpUrl"
original: "https://core.telegram.org/type/phone.GroupCallStreamRtmpUrl"
section: ref
kind: type
description: "URL для RTMP и ключ потока для использования в программах трансляции"
layout: layout.njk
---

# phone.GroupCallStreamRtmpUrl

URL для RTMP и ключ потока для использования в программах трансляции

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;

---functions---

phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStreamRtmpUrl">phone.groupCallStreamRtmpUrl</a></td><td>Содержит URL для публикации по RTMP и секретный ключ потока, см. <a href="/api/group-calls#creating-and-publishing-an-rtmp-livestream">создание и публикация RTMP-трансляции »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStreamRtmpUrl">phone.getGroupCallStreamRtmpUrl</a></td><td>Получить URL для RTMP и ключ потока, используемые единственным внешним вещателем, который публикует весь звук и видео для видеочата, трансляции или прямой истории в режиме RTMP.<br><br>Полный порядок действий описан <a href="/api/group-calls#creating-and-publishing-an-rtmp-livestream">здесь »</a>.</td></tr></tbody></table>
