---
title: "inputAiComposeToneSlug"
original: "https://core.telegram.org/constructor/inputAiComposeToneSlug"
section: ref
kind: constructor
description: "Ссылается на пользовательскую тональность AI-редактора » по её публичному слагу; используется при открытии ссылки на тональность AI-редактора »."
layout: layout.njk
---

# inputAiComposeToneSlug

Ссылается на пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones) по её публичному слагу; используется при открытии [ссылки на тональность AI-редактора »](/api/links/#ai-compose-tone-links).

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Публичный слаг тона, возвращаемый в <a href="/constructor/aiComposeTone">aiComposeTone</a>.<code>slug</code></td></tr></tbody></table>

### Тип

[InputAiComposeTone](/type/InputAiComposeTone/)

### Связанные страницы

#### [aiComposeTone](/constructor/aiComposeTone/)

Пользовательская [тональность AI-составителя »](/api/ai/#ai-compose-tones), применяемая для перефразирования сообщений в определённом стиле с помощью [AI-составителя сообщений](/api/ai/#compose-messages).

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
