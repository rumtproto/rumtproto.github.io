---
title: "inputGroupCallStream"
original: "https://core.telegram.org/constructor/inputGroupCallStream"
section: ref
kind: constructor
description: "Определяет фрагмент медиа видеочата, трансляции или прямой истории в режиме RTMP, см. воспроизведение RTMP-трансляции »."
layout: layout.njk
---

# inputGroupCallStream

Определяет фрагмент медиа видеочата, трансляции или прямой истории в режиме RTMP, см. [воспроизведение RTMP-трансляции »](/api/group-calls/#downloading-media-chunks).

```
inputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок в режиме RTMP</td></tr><tr><td><strong>time_ms</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Отметка времени запрашиваемого фрагмента, в миллисекундах</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Задаёт длительность запрашиваемого медиасегмента в миллисекундах, которая получается сдвигом <code>1000</code> вправо на <code>scale</code> разрядов: <code>duration_ms := 1000 &gt;&gt; scale</code></td></tr><tr><td><strong>video_channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Значение <a href="/constructor/groupCallStreamChannel">groupCallStreamChannel</a>.<code>channel</code> для запрашиваемого видеоканала; объединённое видео использует канал <code>1</code>. Опустите вместе с <code>video_quality</code>, чтобы получить аудио</td></tr><tr><td><strong>video_quality</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Выбранное качество видео (0 — самое низкое, 1 — среднее, 2 — наилучшее)</td></tr></tbody></table>

### Тип

[InputFileLocation](/type/InputFileLocation/)

### Связанные страницы

#### [groupCallStreamChannel](/constructor/groupCallStreamChannel/)

Описывает доступный канал RTMP-трансляции и его текущую позицию воспроизведения; см. [воспроизведение RTMP-трансляции »](/api/group-calls/#rtmp-mode).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
