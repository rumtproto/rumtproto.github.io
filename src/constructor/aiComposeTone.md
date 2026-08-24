---
title: "aiComposeTone"
original: "https://core.telegram.org/constructor/aiComposeTone"
section: ref
kind: constructor
description: "Пользовательская тональность AI-составителя », применяемая для перефразирования сообщений в определённом стиле с помощью AI-составителя сообщений."
layout: layout.njk
---

# aiComposeTone

Пользовательская [тональность AI-составителя »](/api/ai/#ai-compose-tones), применяемая для перефразирования сообщений в определённом стиле с помощью [AI-составителя сообщений](/api/ai/#compose-messages).

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли текущий пользователь создателем этого звука</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор тона</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа тона</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Уникальный слаг тона, используемый для того, чтобы делиться тоном и устанавливать его через <a href="/api/links#ai-compose-tone-links">ссылки на тон AI compose »</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Понятное человеку название тона длиной не более <a href="/api/config#aicompose-tone-title-length-max">aicompose_tone_title_length_max »</a> символов UTF-8</td></tr><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор пользовательского эмодзи</a> значка тона</td></tr><tr><td><strong>prompt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Подсказка, описывающая, как ИИ должен перефразировать сообщения в этом тоне, длиной не более <a href="/api/config#aicompose-tone-prompt-length-max">aicompose_tone_prompt_length_max »</a> символов UTF-8; присутствует только для тонов, созданных текущим пользователем</td></tr><tr><td><strong>installs_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Количество пользователей, установивших эту мелодию</td></tr><tr><td><strong>author_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/long">long</a></td><td>Идентификатор пользователя, создавшего этот звук, если автор сделал его публичным.</td></tr><tr><td><strong>example_english</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/AiComposeToneExample">AiComposeToneExample</a></td><td>Пример, показывающий, как этот тон перефразирует образец сообщения на английском языке; чтобы получить больше примеров, используйте <a href="/method/aicompose.getToneExample">aicompose.getToneExample</a>.</td></tr></tbody></table>

### Тип

[AiComposeTone](/type/AiComposeTone/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [aicompose.getToneExample](/method/aicompose.getToneExample/)

Получить пример того, как [тон ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует образец сообщения; используется для предпросмотра в списке выбора тона.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
