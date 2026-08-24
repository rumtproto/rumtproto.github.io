---
title: "keyboardButtonSwitchInline"
original: "https://core.telegram.org/constructor/keyboardButtonSwitchInline"
section: ref
kind: constructor
description: "Кнопка для переключения пользователя в инлайн-режим"
layout: layout.njk
---

# keyboardButtonSwitchInline

Кнопка для переключения пользователя в инлайн-режим

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны вставить имя пользователя бота и `query` в поле ввода чата, инициировав [инлайн-запрос](/api/bots/inline/).

Если установлен `same_peer`, клиенты используют текущий чат. Иначе клиенты предлагают пользователю выбрать чат, отфильтрованный по `peer_types`, если он указан.

```
keyboardButtonSwitchInline#991399fc flags:# same_peer:flags.0?true style:flags.10?KeyboardButtonStyle text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>same_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, нажатие кнопки вставит имя пользователя бота и указанный инлайн-запрос <code>query</code> в поле ввода текущего чата.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись кнопки</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Инлайн-запрос, который нужно использовать</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InlineQueryPeerType">InlineQueryPeerType</a>&gt;</td><td>Фильтр, применяемый при выборе чатов.</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Представляет инлайн-клавиатуру

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
