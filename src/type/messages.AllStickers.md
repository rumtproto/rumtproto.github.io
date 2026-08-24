---
title: "messages.AllStickers"
original: "https://core.telegram.org/type/messages.AllStickers"
section: ref
kind: type
description: "Все стикеры"
layout: layout.njk
---

# Messages.AllStickers

Все стикеры

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;

---functions---

messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
messages.getMaskStickers#640f82b8 hash:long = messages.AllStickers;
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.allStickersNotModified">messages.allStickersNotModified</a></td><td>Информация обо всех установленных стикерах не изменилась</td></tr><tr><td><a href="/constructor/messages.allStickers">messages.allStickers</a></td><td>Информация обо всех установленных стикерах</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getAllStickers">messages.getAllStickers</a></td><td>Получить все установленные стикеры</td></tr><tr><td><a href="/method/messages.getMaskStickers">messages.getMaskStickers</a></td><td>Получить установленные стикеры-маски</td></tr><tr><td><a href="/method/messages.getEmojiStickers">messages.getEmojiStickers</a></td><td>Получает список установленных на данный момент <a href="/api/custom-emoji">наборов стикеров с пользовательскими эмодзи</a>.</td></tr></tbody></table>
