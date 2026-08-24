---
title: "messages.affectedHistory"
original: "https://core.telegram.org/constructor/messages.affectedHistory"
section: ref
kind: constructor
description: "Затронутая часть истории переписки с пользователем или в чате."
layout: layout.njk
---

# messages.affectedHistory

Затронутая часть истории переписки с пользователем или в чате.

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Количество событий, произошедших в текстовом поле</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество затронутых событий</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если параметр содержит положительное значение, необходимо повторить вызов метода с указанным значением; по мере обработки всей истории само значение будет постепенно уменьшаться</td></tr></tbody></table>

### Тип

[messages.AffectedHistory](/type/messages.AffectedHistory/)
