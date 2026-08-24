---
title: "aicompose.saveTone"
original: "https://core.telegram.org/method/aicompose.saveTone"
section: ref
kind: method
description: "Установить или удалить тон ИИ-редактора », добавив его в список сохранённых тонов текущего пользователя или удалив из него."
layout: layout.njk
---

# aicompose.saveTone

Установить или удалить [тон ИИ-редактора »](/api/ai/#ai-compose-tones), добавив его в список сохранённых тонов текущего пользователя или удалив из него.

Пользователи без [Premium](/api/premium/) могут установить до [aicompose\_tone\_saved\_limit\_default »](/api/config/#aicompose-tone-saved-limit-default) тональностей, пользователи [Premium](/api/premium/) — до [aicompose\_tone\_saved\_limit\_premium »](/api/config/#aicompose-tone-saved-limit-premium) тональностей.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone">InputAiComposeTone</a></td><td>Тон, который нужно сохранить или убрать из сохранённых</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Если <code>false</code>, устанавливает (сохраняет) тон; если <code>true</code>, удаляет (перестаёт сохранять) его</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>Указанный тон недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
