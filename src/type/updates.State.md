---
title: "updates.State"
original: "https://core.telegram.org/type/updates.State"
section: ref
kind: type
description: "Объект содержит информацию о состоянии для дальнейших обновлений."
layout: layout.njk
---

# updates.State

Объект содержит информацию о состоянии для дальнейших обновлений.

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;

---functions---

updates.getState#edd4882a = updates.State;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/updates.state">updates.state</a></td><td>Состояние обновлений.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/updates.getState">updates.getState</a></td><td>Возвращает текущее состояние обновлений.</td></tr></tbody></table>
