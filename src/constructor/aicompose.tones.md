---
title: "aicompose.tones"
original: "https://core.telegram.org/constructor/aicompose.tones"
section: ref
kind: constructor
description: "Список сохранённых тонов ИИ-редактора » текущего пользователя."
layout: layout.njk
---

# aicompose.tones

Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>tones</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AiComposeTone">AiComposeTone</a>&gt;</td><td>Сохранённые тоны ИИ-редактора</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи (то есть авторы мелодий)</td></tr></tbody></table>

### Тип

[aicompose.Tones](/type/aicompose.Tones/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
