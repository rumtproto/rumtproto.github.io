---
title: "pageBlockVideo"
original: "https://core.telegram.org/constructor/pageBlockVideo"
section: ref
kind: constructor
description: "Видео"
layout: layout.njk
---

# pageBlockVideo

Видео

```
pageBlockVideo#7c8fe7b6 flags:# autoplay:flags.0?true loop:flags.1?true video_id:long caption:PageCaption = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>autoplay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Настроено ли видео на автовоспроизведение</td></tr><tr><td><strong>loop</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Настроено ли видео на зацикливание</td></tr><tr><td><strong>video_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор видео</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption">PageCaption</a></td><td>Подпись</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
