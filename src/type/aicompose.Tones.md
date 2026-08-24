---
title: "aicompose.Tones"
original: "https://core.telegram.org/type/aicompose.Tones"
section: ref
kind: type
description: "Список сохранённых тонов ИИ-редактора » текущего пользователя."
layout: layout.njk
---

# Aicompose.Tones

Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.

```
Method schema is available as of layer 225. Switch »
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/aicompose.tonesNotModified">aicompose.tonesNotModified</a></td><td>[@term:hash] Список сохранённых <a href="/api/ai#ai-compose-tones">тонов ИИ-редактора »</a> не изменился с момента последнего получения (то есть значение <code>hash</code>, переданное в <a href="/method/aicompose.getTones">aicompose.getTones</a>, всё ещё действительно).</td></tr><tr><td><a href="/constructor/aicompose.tones">aicompose.tones</a></td><td>Список сохранённых <a href="/api/ai#ai-compose-tones">тонов ИИ-редактора »</a> текущего пользователя.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/aicompose.getTone">aicompose.getTone</a></td><td>Получить сведения об одном <a href="/api/ai#ai-compose-tones">тоне ИИ-редактора »</a>, например чтобы разрешить общедоступную ссылку на тон.</td></tr><tr><td><a href="/method/aicompose.getTones">aicompose.getTones</a></td><td>Получить список сохранённых <a href="/api/ai#ai-compose-tones">тонов ИИ-редактора »</a> текущего пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
