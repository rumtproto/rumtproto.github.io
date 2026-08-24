---
title: "GroupCallStreamChannel"
original: "https://core.telegram.org/type/GroupCallStreamChannel"
section: ref
kind: type
description: "Информация о потоке RTMP в групповом звонке или трансляции"
layout: layout.njk
---

# GroupCallStreamChannel

Информация о потоке RTMP в групповом звонке или трансляции

```
groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallStreamChannel">groupCallStreamChannel</a></td><td>Описывает доступный канал RTMP-трансляции и его текущую позицию воспроизведения, см. <a href="/api/group-calls#rtmp-mode">воспроизведение RTMP-трансляции »</a>.</td></tr></tbody></table>
