---
title: "phone.groupCallStreamChannels"
original: "https://core.telegram.org/constructor/phone.groupCallStreamChannels"
section: ref
kind: constructor
description: "Содержит доступные каналы группового звонка в режиме RTMP, см. воспроизведение RTMP-трансляции »."
layout: layout.njk
---

# phone.groupCallStreamChannels

Содержит доступные каналы группового звонка в режиме RTMP, см. [воспроизведение RTMP-трансляции »](/api/group-calls/#rtmp-mode).

```
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallStreamChannel">GroupCallStreamChannel</a>&gt;</td><td>Доступные каналы RTMP-потока; список может быть пустым, пока внешний вещатель не передаёт медиаданные</td></tr></tbody></table>

### Тип

[phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
