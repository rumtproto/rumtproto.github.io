---
title: "groupCallStreamChannel"
original: "https://core.telegram.org/constructor/groupCallStreamChannel"
section: ref
kind: constructor
description: "Описывает доступный канал RTMP-трансляции и его текущую позицию воспроизведения; см. воспроизведение RTMP-трансляции »."
layout: layout.njk
---

# groupCallStreamChannel

Описывает доступный канал RTMP-трансляции и его текущую позицию воспроизведения; см. [воспроизведение RTMP-трансляции »](/api/group-calls/#rtmp-mode).

```
groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор канала потока; используется как источник синтетической группы видеоисточников <code>unified</code> и как <a href="/constructor/inputGroupCallStream">inputGroupCallStream</a>.<code>video_channel</code> при получении соответствующего сегмента видео</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><strong>Устарело</strong>, <a href="/api/group-calls#rtmp-mode">игнорируется клиентами »</a>: вместо этого следует использовать длительность медиасегмента, жёстко заданную в клиентах (1000 миллисекунд, то есть <code>scale = 0</code>).<br>Исторически это поле задавало длительность запрашиваемого медиасегмента, которая получалась в миллисекундах сдвигом <code>1000</code> вправо на <code>scale</code> разрядов: <code>duration_ms := 1000 &gt;&gt; scale</code>.</td></tr><tr><td><strong>last_timestamp_ms</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Отметка времени последнего просмотра, позволяющая без труда начать загрузку фрагментов трансляции с помощью <a href="/constructor/inputGroupCallStream">inputGroupCallStream</a></td></tr></tbody></table>

### Тип

[GroupCallStreamChannel](/type/GroupCallStreamChannel/)

### Связанные страницы

#### [inputGroupCallStream](/constructor/inputGroupCallStream/)

Определяет фрагмент медиа видеочата, трансляции или прямой истории в режиме RTMP, см. [воспроизведение RTMP-трансляции »](/api/group-calls/#downloading-media-chunks).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
