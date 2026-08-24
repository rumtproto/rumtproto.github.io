---
title: "aicompose.getTone"
original: "https://core.telegram.org/method/aicompose.getTone"
section: ref
kind: method
description: "Получить сведения об одном тоне ИИ-редактора », например чтобы разрешить общедоступную ссылку на тон."
layout: layout.njk
---

# aicompose.getTone

Получить сведения об одном [тоне ИИ-редактора »](/api/ai/#ai-compose-tones), например чтобы разрешить общедоступную ссылку на тон.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Тон, который нужно получить</td></tr></tbody></table>

### Результат

[aicompose.Tones](/type/aicompose.Tones/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>Указанный тон недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
