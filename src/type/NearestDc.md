---
title: "NearestDc"
original: "https://core.telegram.org/type/NearestDc"
section: ref
kind: type
description: "Объект содержит информацию о ближайшем дата-центре."
layout: layout.njk
---

# NearestDc

Объект содержит информацию о ближайшем дата-центре.

```
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;

---functions---

help.getNearestDc#1fb33026 = NearestDc;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/nearestDc">nearestDc</a></td><td>Ближайший дата-центр, определённый по geo-ip.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getNearestDc">help.getNearestDc</a></td><td>Возвращает сведения о ближайшем к пользователю дата-центре.</td></tr></tbody></table>
