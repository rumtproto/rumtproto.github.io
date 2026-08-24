---
title: "messages.FoundStickers"
original: "https://core.telegram.org/type/messages.FoundStickers"
section: ref
kind: type
description: "Найденные стикеры"
layout: layout.njk
---

# Messages.FoundStickers

Найденные [стикеры](/api/stickers/)

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;

---functions---

messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickersNotModified">messages.foundStickersNotModified</a></td><td>По указанному запросу новых стикеров не найдено</td></tr><tr><td><a href="/constructor/messages.foundStickers">messages.foundStickers</a></td><td>Найденные стикеры</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickers">messages.searchStickers</a></td><td>Поиск стикеров по ключевым словам с использованием ИИ</td></tr></tbody></table>

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
