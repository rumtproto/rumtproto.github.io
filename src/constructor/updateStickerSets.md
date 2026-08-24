---
title: "updateStickerSets"
original: "https://core.telegram.org/constructor/updateStickerSets"
section: ref
kind: constructor
description: "Установленные наборы стикеров изменились, клиенту следует запросить их заново, как описано в документации."
layout: layout.njk
---

# updateStickerSets

Установленные наборы стикеров изменились, клиенту следует запросить их заново, как [описано в документации](/api/stickers/#installing-stickersets).

```
updateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Изменились ли наборы стикеров-масок</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Изменился ли список установленных <a href="/api/custom-emoji">наборов пользовательских эмодзи</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
