---
title: "updateReadStories"
original: "https://core.telegram.org/constructor/updateReadStories"
section: ref
kind: constructor
description: "Истории определённого пира были отмечены как прочитанные."
layout: layout.njk
---

# updateReadStories

Истории определённого пира были отмечены как прочитанные.

```
updateReadStories#f74e932b peer:Peer max_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последней истории, отмеченной как прочитанная</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
