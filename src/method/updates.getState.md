---
title: "updates.getState"
original: "https://core.telegram.org/method/updates.getState"
section: ref
kind: method
description: "Возвращает текущее состояние обновлений."
layout: layout.njk
---

# updates.getState

Возвращает текущее состояние обновлений.

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
---functions---
updates.getState#edd4882a = updates.State;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[updates.State](/type/updates.State/)

### Этот метод доступен и пользователям, и ботам
