---
title: "aicompose.deleteTone"
original: "https://core.telegram.org/method/aicompose.deleteTone"
section: ref
kind: method
description: "Безвозвратно удалить пользовательский тон AI-редактора », созданный текущим пользователем."
layout: layout.njk
---

# aicompose.deleteTone

Безвозвратно удалить пользовательский [тон AI-редактора »](/api/ai/#ai-compose-tones), созданный текущим пользователем.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Тон, который нужно удалить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>Указанный тон недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
