---
title: "messages.MyStickers"
original: "https://core.telegram.org/type/messages.MyStickers"
section: ref
kind: type
description: "Список наборов стикеров, принадлежащих текущему аккаунту »."
layout: layout.njk
---

# messages.MyStickers

Список [наборов стикеров, принадлежащих текущему аккаунту »](/api/stickers/).

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;

---functions---

messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.myStickers">messages.myStickers</a></td><td>Список <a href="/api/stickers">наборов стикеров, принадлежащих текущему аккаунту »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getMyStickers">messages.getMyStickers</a></td><td>Получить все <a href="/api/stickers">наборы стикеров »</a>, принадлежащие текущему пользователю.</td></tr></tbody></table>

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
