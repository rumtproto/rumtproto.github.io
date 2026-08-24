---
title: "messages.toggleStickerSets"
original: "https://core.telegram.org/method/messages.toggleStickerSets"
section: ref
kind: method
description: "Применить изменения к нескольким наборам стикеров"
layout: layout.njk
---

# messages.toggleStickerSets

Применить изменения к нескольким наборам стикеров

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleStickerSets#b5052fea flags:# uninstall:flags.0?true archive:flags.1?true unarchive:flags.2?true stickersets:Vector<InputStickerSet> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>uninstall</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Удалить указанные наборы стикеров</td></tr><tr><td><strong>archive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Архивировать указанные наборы стикеров</td></tr><tr><td><strong>unarchive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Разархивировать указанные наборы стикеров</td></tr><tr><td><strong>stickersets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputStickerSet">InputStickerSet</a>&gt;</td><td>Наборы стикеров, над которыми выполняется действие</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям
