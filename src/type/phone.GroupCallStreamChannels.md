---
title: "phone.GroupCallStreamChannels"
original: "https://core.telegram.org/type/phone.GroupCallStreamChannels"
section: ref
kind: type
description: "Информация о потоках RTMP в групповом звонке или трансляции"
layout: layout.njk
---

# phone.GroupCallStreamChannels

Информация о потоках RTMP в групповом звонке или трансляции

```
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;

---functions---

phone.getGroupCallStreamChannels#1ab21940 call:InputGroupCall = phone.GroupCallStreamChannels;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStreamChannels">phone.groupCallStreamChannels</a></td><td>Содержит доступные каналы группового звонка в режиме RTMP, см. <a href="/api/group-calls#rtmp-mode">воспроизведение RTMP-трансляции »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStreamChannels">phone.getGroupCallStreamChannels</a></td><td>Получить доступные каналы потока и текущую позицию воспроизведения видеочата, трансляции или прямой истории в режиме RTMP; полный порядок действий описан <a href="/api/group-calls#rtmp-mode">здесь »</a>.<br>Перед вызовом этого метода необходимо подключиться к групповому звонку. Отправляйте запрос в медиа-DC, указанный в <a href="/constructor/groupCall">groupCall</a>.<code>stream_dc_id</code>.</td></tr></tbody></table>
