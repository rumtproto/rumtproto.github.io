---
title: "keyboardButtonGame"
original: "https://core.telegram.org/constructor/keyboardButtonGame"
section: ref
kind: constructor
description: "Кнопка для запуска игры"
layout: layout.njk
---

# keyboardButtonGame

Кнопка для запуска игры

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны открыть [игру](/constructor/game/) из приложенного конструктора [messageMediaGame](/constructor/messageMediaGame/), вызвав [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) с установленным флагом `game`, как описано в разделе [Запуск игры](/api/bots/games/#starting-a-game).

```
keyboardButtonGame#89c590f9 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Представляет инлайн-клавиатуру

#### [game](/constructor/game/)

Указывает на уже отправленную игру

#### [messageMediaGame](/constructor/messageMediaGame/)

Игра Telegram

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Нажать инлайн-кнопку обратного вызова и получить ответ от бота

#### [HTML5-игры](/api/bots/games/)

Боты могут предлагать пользователям HTML5-игры для одиночной игры или для соревнования друг с другом в группах и личных чатах.
