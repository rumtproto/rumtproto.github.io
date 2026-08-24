---
title: "messages.myStickers"
original: "https://core.telegram.org/constructor/messages.myStickers"
section: ref
kind: constructor
description: "Список наборов стикеров, принадлежащих текущему аккаунту »."
layout: layout.njk
---

# messages.myStickers

Список [наборов стикеров, принадлежащих текущему аккаунту »](/api/stickers/).

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число принадлежащих пользователю наборов стикеров.</td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerSetCovered">StickerSetCovered</a>&gt;</td><td>Наборы стикеров</td></tr></tbody></table>

### Тип

[messages.MyStickers](/type/messages.MyStickers/)

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
