---
title: "inputMediaUploadedPhoto"
original: "https://core.telegram.org/constructor/inputMediaUploadedPhoto"
section: ref
kind: constructor
description: "Фотография"
layout: layout.njk
---

# inputMediaUploadedPhoto

Фотография

```
inputMediaUploadedPhoto#1e287d04 flags:# spoiler:flags.2?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Живое ли это фото, то есть неподвижный снимок в паре с коротким фрагментом <code>video</code>, снятым одновременно с ним</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td><a href="/api/files">Загруженный файл</a></td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDocument">InputDocument</a>&gt;</td><td>Прикреплённые стикеры-маски</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающейся фотографии; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы фотография уничтожилась сразу после воспроизведения; в остальных случаях фотография самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InputDocument">InputDocument</a></td><td>Короткий видеофрагмент живого фото</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
