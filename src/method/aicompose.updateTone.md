---
title: "aicompose.updateTone"
original: "https://core.telegram.org/method/aicompose.updateTone"
section: ref
kind: method
description: "Изменить пользовательский тон ИИ-редактора », ранее созданный текущим пользователем. Будут изменены только те поля, для которых установлен флаг."
layout: layout.njk
---

# aicompose.updateTone

Изменить пользовательский [тон ИИ-редактора »](/api/ai/#ai-compose-tones), ранее созданный текущим пользователем. Будут изменены только те поля, для которых установлен флаг.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Тон, который нужно изменить</td></tr><tr><td><strong>display_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Если установлено, изменяет, указывается ли текущий пользователь публично как автор мелодии (тернарное значение: может быть не установлено, установлено и истинно, установлено и ложно).</td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Если установлено, новый <a href="/api/custom-emoji">идентификатор пользовательского эмодзи</a> для значка тона</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если установлено, новое человекочитаемое название тона длиной до <a href="/api/config#aicompose-tone-title-length-max">aicompose_tone_title_length_max »</a> символов UTF-8</td></tr><tr><td><strong>prompt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Если установлено, новый промпт, описывающий, как ИИ должен перефразировать сообщения с использованием этого тона, длиной до <a href="/api/config#aicompose-tone-prompt-length-max">aicompose_tone_prompt_length_max »</a> символов UTF-8</td></tr></tbody></table>

### Результат

[AiComposeTone](/type/AiComposeTone/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>Указанный тон недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
