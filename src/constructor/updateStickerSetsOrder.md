---
title: "updateStickerSetsOrder"
original: "https://core.telegram.org/constructor/updateStickerSetsOrder"
section: ref
kind: constructor
description: "Порядок наборов стикеров был изменён"
layout: layout.njk
---

# updateStickerSetsOrder

Порядок наборов стикеров был изменён

```
updateStickerSetsOrder#bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Являются ли обновлённые стикеры стикерами-масками</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Являются ли обновлённые стикеры пользовательскими эмодзи</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Новый порядок стикеров по идентификаторам стикеров</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
