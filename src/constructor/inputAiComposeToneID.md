---
title: "inputAiComposeToneID"
original: "https://core.telegram.org/constructor/inputAiComposeToneID"
section: ref
kind: constructor
description: "Ссылается на пользовательскую тональность AI-редактора » по её ID и хешу доступа."
layout: layout.njk
---

# inputAiComposeToneID

Ссылается на пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones) по её ID и хешу доступа.

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор тона, как он возвращается в <a href="/constructor/aiComposeTone">aiComposeTone</a>.<code>id</code></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] <a href="/api/peers#access-hash">Хеш доступа</a> тона, как он возвращается в <a href="/constructor/aiComposeTone">aiComposeTone</a>.<code>access_hash</code></td></tr></tbody></table>

### Тип

[InputAiComposeTone](/type/InputAiComposeTone/)

### Связанные страницы

#### [aiComposeTone](/constructor/aiComposeTone/)

Пользовательская [тональность AI-составителя »](/api/ai/#ai-compose-tones), применяемая для перефразирования сообщений в определённом стиле с помощью [AI-составителя сообщений](/api/ai/#compose-messages).

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
