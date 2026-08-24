---
title: "updateMoveStickerSetToTop"
original: "https://core.telegram.org/constructor/updateMoveStickerSetToTop"
section: ref
kind: constructor
description: "Набор стикеров был перемещён в начало списка, подробнее см. здесь »"
layout: layout.njk
---

# updateMoveStickerSetToTop

Набор стикеров был перемещён в начало списка, [подробнее см. здесь »](/api/stickers/#recent-stickersets)

```
updateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Это обновление относится к <a href="/api/stickers#mask-stickers">набору стикеров-масок</a></td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Это обновление относится к <a href="/api/custom-emoji">набору стикеров с пользовательскими эмодзи</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/stickers">набора стикеров</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
