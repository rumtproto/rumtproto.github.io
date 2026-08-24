---
title: "AvailableEffect"
original: "https://core.telegram.org/type/AvailableEffect"
section: ref
kind: type
description: "Описывает эффект сообщения »."
layout: layout.njk
---

# AvailableEffect

Описывает [эффект сообщения »](/api/effects/).

```
availableEffect#93c3e27e flags:# premium_required:flags.2?true id:long emoticon:string static_icon_id:flags.0?long effect_sticker_id:long effect_animation_id:flags.1?long = AvailableEffect;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/availableEffect">availableEffect</a></td><td>Представляет <a href="/api/effects">эффект сообщения »</a>.<br><br>Все идентификаторы типа <code>long</code>, кроме <code>id</code>, — это значения <a href="/constructor/document">document</a>.<code>id</code> из содержащего их конструктора <a href="/constructor/messages.availableEffects">messages.availableEffects</a>.<br><br>Подробнее о том, как использовать перечисленные ниже поля, см. <a href="/api/effects">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.
