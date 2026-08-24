---
title: "inputMediaPhoto"
original: "https://core.telegram.org/constructor/inputMediaPhoto"
section: ref
kind: constructor
description: "Пересланная фотография"
layout: layout.njk
---

# inputMediaPhoto

Пересланная фотография

```
inputMediaPhoto#b3ba0635 flags:# spoiler:flags.1?true id:InputPhoto ttl_seconds:flags.0?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Живое ли это фото, то есть неподвижный снимок в паре с коротким фрагментом <code>video</code>, снятым одновременно с ним</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto">InputPhoto</a></td><td>Фотография для пересылки</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающейся фотографии; может быть равно <code>0</code>, чтобы отключить самоуничтожение, либо <code>0x7FFFFFFF</code>, чтобы документ уничтожился сразу после воспроизведения; в остальных случаях самоуничтожение происходит через <code>ttl_seconds</code> после воспроизведения.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputDocument">InputDocument</a></td><td>Короткий видеофрагмент живого фото</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
