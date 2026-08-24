---
title: "MaskCoords"
original: "https://core.telegram.org/type/MaskCoords"
section: ref
kind: type
description: "Координаты маски (если это стикер-маска, наложенный на фотографию)"
layout: layout.njk
---

# MaskCoords

Координаты маски (если это стикер-маска, наложенный на фотографию)

```
maskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/maskCoords">maskCoords</a></td><td>Место на фотографии, куда следует поместить маску при <a href="/api/stickers#attached-stickers">прикреплении стикеров к медиафайлам »</a><br><br>Позиция <code>n</code> указывает, куда следует поместить маску:<br><br>- 0 =&gt; Относительно лба<br>- 1 =&gt; Относительно глаз<br>- 2 =&gt; Относительно рта<br>- 3 =&gt; Относительно подбородка</td></tr></tbody></table>
