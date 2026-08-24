---
title: "messages.FoundStickerSets"
original: "https://core.telegram.org/type/messages.FoundStickerSets"
section: ref
kind: type
description: "Найденные наборы стикеров"
layout: layout.njk
---

# Messages.FoundStickerSets

Найденные наборы стикеров

```
messages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;

---functions---

messages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
messages.searchEmojiStickerSets#92b4494c flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickerSetsNotModified">messages.foundStickerSetsNotModified</a></td><td>Больше результатов не найдено</td></tr><tr><td><a href="/constructor/messages.foundStickerSets">messages.foundStickerSets</a></td><td>Найденные наборы стикеров</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickerSets">messages.searchStickerSets</a></td><td>Поиск наборов стикеров</td></tr><tr><td><a href="/method/messages.searchEmojiStickerSets">messages.searchEmojiStickerSets</a></td><td>Поиск <a href="/api/custom-emoji">наборов стикеров с пользовательскими эмодзи »</a></td></tr></tbody></table>
