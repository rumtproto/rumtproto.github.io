---
title: "messages.composeMessageWithAI"
original: "https://core.telegram.org/method/messages.composeMessageWithAI"
section: ref
kind: method
description: "Вызывает ИИ-редактор Telegram, который может множеством разных способов перевести ваше сообщение, преобразовать его, исправить в нём ошибки и (или) добавить эмодзи; всё это…"
layout: layout.njk
---

# messages.composeMessageWithAI

Вызывает ИИ-редактор Telegram, который может множеством разных способов перевести ваше сообщение, преобразовать его, исправить в нём ошибки и (или) добавить эмодзи; всё это приватно работает на [Cocoon](https://cocoon.org), подробнее см. [здесь »](/api/ai/#compose-messages)!

Все перечисленные ниже режимы можно комбинировать.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>proofread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, вычитывает сообщение и исправляет в нём ошибки</td></tr><tr><td><strong>emojify</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, добавляет к сообщению эмодзи</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Сообщение</td></tr><tr><td><strong>translate_to_lang</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если установлено, переводит сообщение на указанный язык</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Если установлено, перефразирует сообщение с использованием указанной <a href="/api/ai#ai-compose-tones">тональности AI-редактора »</a></td></tr></tbody></table>

### Результат

[messages.ComposedMessageWithAI](/type/messages.ComposedMessageWithAI/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_FLOOD_PREMIUM</td><td>Вы достигли дневного лимита преобразований текста с помощью ИИ; оформите <a href="/api/premium">Telegram Premium</a>, чтобы получить в <strong>50</strong> раз больше преобразований текста с помощью ИИ в день!</td></tr><tr><td>500</td><td>AICOMPOSE_TIMEOUT</td><td>При составлении сообщения истекло время ожидания.</td></tr><tr><td>400</td><td>AI_COMPOSE_TASK_MISSING</td><td>Не указана ни одна задача для AI. Вызывающая сторона обязана указать хотя бы одно из: proofread, translate (с языком перевода), tone или emojify.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
