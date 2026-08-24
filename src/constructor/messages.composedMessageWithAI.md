---
title: "messages.composedMessageWithAI"
original: "https://core.telegram.org/constructor/messages.composedMessageWithAI"
section: ref
kind: constructor
description: "Представляет сообщение, изменённое ИИ."
layout: layout.njk
---

# messages.composedMessageWithAI

Представляет сообщение, изменённое ИИ.

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>result_text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Изменённое сообщение.</td></tr><tr><td><strong>diff_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Если включён <strong>только</strong> режим корректуры (<a href="/method/messages.composeMessageWithAI">messages.composeMessageWithAI</a>.<code>proofread</code>), это поле будет заполнено «предварительно отрисованной» разницей между старым и новым текстом сообщения с использованием <strong>только</strong> <a href="/api/entities#diff-entities">сущностей оформления diff »</a>.</td></tr></tbody></table>

### Тип

[messages.ComposedMessageWithAI](/type/messages.ComposedMessageWithAI/)

### Связанные страницы

#### [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/)

Вызывает ИИ-редактор Telegram, который может множеством разных способов перевести ваше сообщение, преобразовать его, исправить в нём ошибки и (или) добавить эмодзи; всё это приватно работает на [Cocoon](https://cocoon.org), подробнее см. [здесь »](/api/ai/#compose-messages)!

Все перечисленные ниже режимы можно комбинировать.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
