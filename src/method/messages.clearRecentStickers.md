---
title: "messages.clearRecentStickers"
original: "https://core.telegram.org/method/messages.clearRecentStickers"
section: ref
kind: method
description: "Очистить недавние стикеры"
layout: layout.njk
---

# messages.clearRecentStickers

Очистить недавние стикеры

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.clearRecentStickers#8999602d flags:# attached:flags.0?true = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>attached</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы очистить список стикеров, недавно прикреплённых к фотографиям или видеофайлам</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям
