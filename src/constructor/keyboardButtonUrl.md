---
title: "keyboardButtonUrl"
original: "https://core.telegram.org/constructor/keyboardButtonUrl"
section: ref
kind: constructor
description: "Кнопка со ссылкой"
layout: layout.njk
---

# keyboardButtonUrl

Кнопка со ссылкой

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты открывают `url`, показывая запрос подтверждения, если только этот URL не входит в число [внутренних URI](https://github.com/DrKLO/Telegram/blob/68d51749c4fcbaffa584829f23936565df55e08b/TMessagesProj/src/main/java/org/telegram/messenger/browser/Browser.java#L680).

```
keyboardButtonUrl#d80c25ec flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись кнопки</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Представляет инлайн-клавиатуру
