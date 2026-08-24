---
title: "inputMessageReadMetric"
original: "https://core.telegram.org/constructor/inputMessageReadMetric"
section: ref
kind: constructor
description: "Метрика прочтения для одного показа сообщения, описывающая, как долго сообщение было видно в области просмотра чата."
layout: layout.njk
---

# inputMessageReadMetric

Метрика прочтения для одного показа сообщения, описывающая, как долго сообщение было видно в области просмотра чата.

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr><tr><td><strong>view_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный ненулевой 64-битный идентификатор, сгенерированный для этого показа</td></tr><tr><td><strong>time_in_view_ms</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее время показа хотя бы одного пикселя сообщения, в миллисекундах, после 300-миллисекундного льготного периода при появлении</td></tr><tr><td><strong>active_time_in_view_ms</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Часть <code>time_in_view_ms</code>, накопленная за время активности пользователя</td></tr><tr><td><strong>height_to_viewport_ratio_permille</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>round(max_message_height * 1000 / max_viewport_height)</code>; может превышать 1000, если сообщение выше области просмотра</td></tr><tr><td><strong>seen_range_ratio_permille</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>round(max_seen_vertical_range * 1000 / max_message_height)</code>, ограничивается диапазоном 0–1000</td></tr></tbody></table>

### Тип

[InputMessageReadMetric](/type/InputMessageReadMetric/)
