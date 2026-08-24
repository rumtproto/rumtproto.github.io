---
title: "aicompose.createTone"
original: "https://core.telegram.org/method/aicompose.createTone"
section: ref
kind: method
description: "Создать новую пользовательскую тональность AI-редактора »."
layout: layout.njk
---

# aicompose.createTone

Создать новую пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones).

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>display_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, текущий пользователь будет публично указан как автор тона</td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор пользовательского эмодзи</a> значка тона</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Понятное человеку название тона длиной не более <a href="/api/config#aicompose-tone-title-length-max">aicompose_tone_title_length_max »</a> символов UTF-8</td></tr><tr><td><strong>prompt</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подсказка, описывающая, как ИИ должен перефразировать сообщения в этом тоне, длиной не более <a href="/api/config#aicompose-tone-prompt-length-max">aicompose_tone_prompt_length_max »</a> символов UTF-8</td></tr></tbody></table>

### Результат

[AiComposeTone](/type/AiComposeTone/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_TITLE_INVALID</td><td>Указанное название тона недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
