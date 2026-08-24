---
title: "messages.FeaturedStickers"
original: "https://core.telegram.org/type/messages.FeaturedStickers"
section: ref
kind: type
description: "Новые наборы стикеров"
layout: layout.njk
---

# Messages.FeaturedStickers

Новые наборы стикеров

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;

---functions---

messages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;
messages.getOldFeaturedStickers#7ed094a1 offset:int limit:int hash:long = messages.FeaturedStickers;
messages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.featuredStickersNotModified">messages.featuredStickersNotModified</a></td><td>Рекомендуемые стикеры не изменились</td></tr><tr><td><a href="/constructor/messages.featuredStickers">messages.featuredStickers</a></td><td>Рекомендуемые наборы стикеров</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getFeaturedStickers">messages.getFeaturedStickers</a></td><td>Получить рекомендуемые стикеры</td></tr><tr><td><a href="/method/messages.getOldFeaturedStickers">messages.getOldFeaturedStickers</a></td><td>Метод для получения ранее рекомендуемых стикеров</td></tr><tr><td><a href="/method/messages.getFeaturedEmojiStickers">messages.getFeaturedEmojiStickers</a></td><td>Получает рекомендуемые наборы стикеров с пользовательскими эмодзи.</td></tr></tbody></table>
