---
title: "documentAttributeVideo"
original: "https://core.telegram.org/constructor/documentAttributeVideo"
section: ref
kind: constructor
description: "Определяет видео"
layout: layout.njk
---

# documentAttributeVideo

Определяет видео

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;

===66===
documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
```

#### Схема API

```
documentAttributeVideo#43c57c48 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int video_start_ts:flags.4?double video_codec:flags.5?string = DocumentAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>round_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли это видеосообщением</td></tr><tr><td><strong>supports_streaming</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Поддерживает ли видео потоковое воспроизведение</td></tr><tr><td><strong>nosound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли указанный документ видеофайлом без звуковых дорожек</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Длительность в секундах</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина видео</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота видео</td></tr><tr><td><strong>preload_prefix_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Количество байт, которые следует загрузить заранее при предзагрузке видео (в частности, <a href="/api/stories">видеоисторий</a>).</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/double">double</a></td><td>Отметка времени UNIX в секундах (с плавающей точкой), указывающая кадр видео, который следует использовать в качестве статичного предпросмотра и миниатюры.</td></tr><tr><td><strong>video_codec</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>Кодек, использованный для видео, то есть "h264", "h265" или "av1"</td></tr></tbody></table>

### Тип

[DocumentAttribute](/type/DocumentAttribute/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
