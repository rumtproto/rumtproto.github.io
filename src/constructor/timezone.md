---
title: "timezone"
original: "https://core.telegram.org/constructor/timezone"
section: ref
kind: constructor
description: "Сведения о часовом поясе."
layout: layout.njk
---

# timezone

Сведения о часовом поясе.

```
timezone#ff9289f5 id:string name:string utc_offset:int = Timezone;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Уникальный идентификатор часового пояса.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Понятное человеку локализованное название часового пояса.</td></tr><tr><td><strong>utc_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение относительно UTC в секундах; клиент может отображать его в формате hh:mm вместе с человекочитаемым названием (например, <code>$name UTC -01:00</code>).</td></tr></tbody></table>

### Тип

[Timezone](/type/Timezone/)
