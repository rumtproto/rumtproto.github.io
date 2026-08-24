---
title: "messageMediaPhoto"
original: "https://core.telegram.org/constructor/messageMediaPhoto"
section: ref
kind: constructor
description: "Вложенная фотография."
layout: layout.njk
---

# messageMediaPhoto

Вложенная фотография.

```
messageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Живое ли это фото, то есть неподвижный снимок в паре с коротким фрагментом <code>video</code>, снятым одновременно с ним</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Photo">Photo</a></td><td>Фотография</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающейся фотографии; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы фотография уничтожилась сразу после воспроизведения; в остальных случаях фотография самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Document">Document</a></td><td>Короткий видеофрагмент живого фото</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)
