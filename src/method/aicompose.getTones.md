---
title: "aicompose.getTones"
original: "https://core.telegram.org/method/aicompose.getTones"
section: ref
kind: method
description: "Получить список сохранённых тонов ИИ-редактора » текущего пользователя."
layout: layout.njk
---

# aicompose.getTones

Получить список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш из ранее закешированного поля <a href="/constructor/aicompose.tones">aicompose.tones</a>.<code>hash</code>; позволяет не запрашивать список повторно, если он не изменился. Изначально 0.</td></tr></tbody></table>

### Результат

[aicompose.Tones](/type/aicompose.Tones/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [aicompose.tones](/constructor/aicompose.tones/)

Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
