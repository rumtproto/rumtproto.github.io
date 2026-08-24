---
title: "keyboardButtonStyle"
original: "https://core.telegram.org/constructor/keyboardButtonStyle"
section: ref
kind: constructor
description: "Этот конструктор позволяет задать для кнопки собственный цвет фона и подпись из пользовательского эмодзи, подробнее »."
layout: layout.njk
---

# keyboardButtonStyle

Этот конструктор позволяет задать для кнопки собственный цвет фона и подпись из пользовательского эмодзи, [подробнее »](/api/bots/buttons/#button-styles).

```
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bg_primary</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Тёмно-синий цвет, рекомендуемый для основных действий.</td></tr><tr><td><strong>bg_danger</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Красный цвет, рекомендуемый для необратимых действий.</td></tr><tr><td><strong>bg_success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Зелёный цвет, рекомендуемый для положительных действий.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/long">long</a></td><td>Идентификатор <a href="/api/custom-emoji">пользовательского эмодзи</a>, который должен отображаться перед подписью кнопки.</td></tr></tbody></table>

### Тип

[KeyboardButtonStyle](/type/KeyboardButtonStyle/)

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
