---
title: "autoSaveSettings"
original: "https://core.telegram.org/constructor/autoSaveSettings"
section: ref
kind: constructor
description: "Настройки автосохранения медиафайлов"
layout: layout.njk
---

# autoSaveSettings

Настройки автосохранения медиафайлов

```
autoSaveSettings#c84834ce flags:# photos:flags.0?true videos:flags.1?true video_max_size:flags.2?long = AutoSaveSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>photos</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли автоматически сохранять фотографии в галерею.</td></tr><tr><td><strong>videos</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли автоматически сохранять видео в галерею.</td></tr><tr><td><strong>video_max_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Если установлено, задаёт ограничение размера для автоматически сохраняемых видео</td></tr></tbody></table>

### Тип

[AutoSaveSettings](/type/AutoSaveSettings/)
