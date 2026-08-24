---
title: "aicompose.getToneExample"
original: "https://core.telegram.org/method/aicompose.getToneExample"
section: ref
kind: method
description: "Получить пример того, как тон ИИ-редактора » перефразирует образец сообщения; используется для предпросмотра в списке выбора тона."
layout: layout.njk
---

# aicompose.getToneExample

Получить пример того, как [тон ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует образец сообщения; используется для предпросмотра в списке выбора тона.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Тон для предпросмотра</td></tr><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Отсчитываемый от нуля индекс запрашиваемого примера, служит для перебора доступных примеров (на каждый тон приходится <a href="/api/config#aicompose-tone-examples-num">aicompose_tone_examples_num »</a> примеров)</td></tr></tbody></table>

### Результат

[AiComposeToneExample](/type/AiComposeToneExample/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>Указанный тон недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
