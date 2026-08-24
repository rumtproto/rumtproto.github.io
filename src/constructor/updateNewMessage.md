---
title: "updateNewMessage"
original: "https://core.telegram.org/constructor/updateNewMessage"
section: ref
kind: constructor
description: "Новое сообщение в личном чате или в обычной группе."
layout: layout.njk
---

# updateNewMessage

Новое сообщение в личном чате или в [обычной группе](/api/channel/#basic-groups).

```
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Сообщение</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Новое количество действий в ящике сообщений</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сгенерированных событий</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
