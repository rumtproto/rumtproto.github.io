---
title: "StickerSetCovered"
original: "https://core.telegram.org/type/StickerSetCovered"
section: ref
kind: type
description: "Предпросмотр набора стикеров"
layout: layout.njk
---

# StickerSetCovered

Предпросмотр набора стикеров

```
stickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;
stickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
stickerSetNoCovered#77b15d1c set:StickerSet = StickerSetCovered;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stickerSetCovered">stickerSetCovered</a></td><td>Набор стикеров с одним стикером в качестве предпросмотра</td></tr><tr><td><a href="/constructor/stickerSetMultiCovered">stickerSetMultiCovered</a></td><td>Набор стикеров с несколькими стикерами в качестве предпросмотра</td></tr><tr><td><a href="/constructor/stickerSetFullCovered">stickerSetFullCovered</a></td><td>Предпросмотр набора стикеров со всеми входящими в него стикерами.<br>Сейчас используется только для <a href="/api/custom-emoji">наборов стикеров с пользовательскими эмодзи</a>, чтобы избежать дополнительного вызова <a href="/method/messages.getStickerSet">messages.getStickerSet</a>.</td></tr><tr><td><a href="/constructor/stickerSetNoCovered">stickerSetNoCovered</a></td><td>Только информация о наборе стикеров, без предпросмотров.</td></tr></tbody></table>
