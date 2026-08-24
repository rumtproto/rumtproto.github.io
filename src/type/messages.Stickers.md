---
title: "messages.Stickers"
original: "https://core.telegram.org/type/messages.Stickers"
section: ref
kind: type
description: "Стикеры"
layout: layout.njk
---

# Messages.Stickers

Стикеры

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickersNotModified">messages.stickersNotModified</a></td><td>По данному запросу новых стикеров не найдено</td></tr><tr><td><a href="/constructor/messages.stickers">messages.stickers</a></td><td>Найденные стикеры</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickers">messages.getStickers</a></td><td>Получить стикеры по эмодзи</td></tr></tbody></table>
