---
title: "DocumentAttribute"
original: "https://core.telegram.org/type/DocumentAttribute"
section: ref
kind: type
description: "Различные возможные атрибуты документа (используются, чтобы определить, является ли он стикером, GIF-анимацией, видео, стикером-маской, изображением, аудиозаписью и так далее)"
layout: layout.njk
---

# DocumentAttribute

Различные возможные атрибуты документа (используются, чтобы определить, является ли он стикером, GIF-анимацией, видео, стикером-маской, изображением, аудиозаписью и так далее)

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
documentAttributeAnimated#11b58939 = DocumentAttribute;
documentAttributeAudio#051448e5 duration:int = DocumentAttribute;
documentAttributeFilename#15590068 file_name:string = DocumentAttribute;
documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;
documentAttributeSticker#fb0a5727 = DocumentAttribute;
documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;

===45===
documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;
documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;

===46===
documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;

===66===
documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
```

Схема API:

```
documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;
documentAttributeAnimated#11b58939 = DocumentAttribute;
documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;
documentAttributeVideo#43c57c48 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int video_start_ts:flags.4?double video_codec:flags.5?string = DocumentAttribute;
documentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
documentAttributeFilename#15590068 file_name:string = DocumentAttribute;
documentAttributeHasStickers#9801d2f7 = DocumentAttribute;
documentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/documentAttributeImageSize">documentAttributeImageSize</a></td><td>Определяет ширину и высоту изображения, загруженного как документ</td></tr><tr><td><a href="/constructor/documentAttributeAnimated">documentAttributeAnimated</a></td><td>Определяет анимированный GIF</td></tr><tr><td><a href="/constructor/documentAttributeSticker">documentAttributeSticker</a></td><td>Определяет стикер</td></tr><tr><td><a href="/constructor/documentAttributeVideo">documentAttributeVideo</a></td><td>Определяет видео</td></tr><tr><td><a href="/constructor/documentAttributeAudio">documentAttributeAudio</a></td><td>Представляет аудиофайл</td></tr><tr><td><a href="/constructor/documentAttributeFilename">documentAttributeFilename</a></td><td>Простой документ с именем файла</td></tr><tr><td><a href="/constructor/documentAttributeHasStickers">documentAttributeHasStickers</a></td><td>Есть ли у текущего документа прикреплённые стикеры</td></tr><tr><td><a href="/constructor/documentAttributeCustomEmoji">documentAttributeCustomEmoji</a></td><td>Информация о пользовательском эмодзи</td></tr></tbody></table>
