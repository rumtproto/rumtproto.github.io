---
title: "keyboardButton"
original: "https://core.telegram.org/constructor/keyboardButton"
section: ref
kind: constructor
description: "Кнопка клавиатуры бота"
layout: layout.njk
---

# keyboardButton

Кнопка клавиатуры бота

Доступно только в [клавиатурах ответа](/constructor/replyKeyboardMarkup/).

При нажатии клиенты обязаны отправить `text` в качестве сообщения в текущий чат, отвечая на сообщение, к которому был приложен [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/).

```
keyboardButton#7d170cff flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)

Представляет клавиатуру ответа
