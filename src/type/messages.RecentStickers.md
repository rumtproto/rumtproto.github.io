---
title: "messages.RecentStickers"
original: "https://core.telegram.org/type/messages.RecentStickers"
section: ref
kind: type
description: "Недавние стикеры"
layout: layout.njk
---

# Messages.RecentStickers

Недавние стикеры

```
messages.recentStickersNotModified#b17f890 = messages.RecentStickers;
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;

---functions---

messages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.recentStickersNotModified">messages.recentStickersNotModified</a></td><td>Новых недавних стикеров не найдено</td></tr><tr><td><a href="/constructor/messages.recentStickers">messages.recentStickers</a></td><td>Недавно использованные стикеры</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getRecentStickers">messages.getRecentStickers</a></td><td>Получить недавние стикеры</td></tr></tbody></table>
