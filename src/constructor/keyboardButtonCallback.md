---
title: "keyboardButtonCallback"
original: "https://core.telegram.org/constructor/keyboardButtonCallback"
section: ref
kind: constructor
description: "Callback-кнопка"
layout: layout.njk
---

# keyboardButtonCallback

Callback-кнопка

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты отправляют боту `data`, при необходимости передавая [параметры 2FA SRP](/api/srp/) пользователя для подтверждения личности, как описано в разделе [callback-запросов](/api/bots/buttons/#callback-queries).

```
keyboardButtonCallback#e62bc960 flags:# requires_password:flags.0?true style:flags.10?KeyboardButtonStyle text:string data:bytes = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>requires_password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Должен ли пользователь подтвердить свою личность, передав <a href="/api/srp">параметры 2FA SRP</a> методу <a href="/method/messages.getBotCallbackAnswer">messages.getBotCallbackAnswer</a>. ПРИМЕЧАНИЕ: благодаря <a href="/api/srp">SRP</a> ни Telegram, ни бот НЕ получают доступа к паролю в открытом виде. Эта кнопка используется в основном официальным ботом <a href="https://t.me/botfather">@botfather</a> для подтверждения личности пользователя перед передачей прав на бота другому пользователю.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Данные для callback-запроса</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Нажать инлайн-кнопку обратного вызова и получить ответ от бота

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Представляет инлайн-клавиатуру
