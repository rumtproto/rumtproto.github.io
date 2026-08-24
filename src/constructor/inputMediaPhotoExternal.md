---
title: "inputMediaPhotoExternal"
original: "https://core.telegram.org/constructor/inputMediaPhotoExternal"
section: ref
kind: constructor
description: "Новая фотография, которая будет загружена сервером по указанному URL"
layout: layout.njk
---

# inputMediaPhotoExternal

Новая фотография, которая будет загружена сервером по указанному URL

```
inputMediaPhotoExternal#e5bbfe1a flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL фотографии</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающейся фотографии; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы фотография уничтожилась сразу после воспроизведения; в остальных случаях фотография самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
