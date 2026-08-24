---
title: "availableEffect"
original: "https://core.telegram.org/constructor/availableEffect"
section: ref
kind: constructor
description: "Представляет эффект сообщения »."
layout: layout.njk
---

# availableEffect

Представляет [эффект сообщения »](/api/effects/).

Все идентификаторы типа `long`, кроме `id`, — это значения [document](/constructor/document/).`id` из содержащего их конструктора [messages.availableEffects](/constructor/messages.availableEffects/).

Подробнее об использовании следующих полей см. [здесь »](/api/effects/).

```
availableEffect#93c3e27e flags:# premium_required:flags.2?true id:long emoticon:string static_icon_id:flags.0?long effect_sticker_id:long effect_animation_id:flags.1?long = AvailableEffect;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>premium_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Требуется ли подписка <a href="/api/premium">Premium</a> для использования этого эффекта.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор эффекта.</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи, соответствующий эффекту; используется в качестве значка эффекта, если не задано <code>static_icon_id</code>.</td></tr><tr><td><strong>static_icon_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор документа со статичным значком (WEBP) эффекта.</td></tr><tr><td><strong>effect_sticker_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Содержит <a href="/api/stickers#animated-stickers">анимацию предпросмотра (формат TGS »)</a>, используемую в меню выбора эффекта.</td></tr><tr><td><strong>effect_animation_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Если установлено, содержит сам анимированный эффект <a href="/api/stickers#animated-stickers">(формат TGS »)</a>. Если не установлено, анимированный эффект обязан совпадать с <a href="/api/stickers#premium-animated-sticker-effects">анимированным эффектом премиум-стикера</a>, связанным с анимированным стикером, указанным в <code>effect_sticker_id</code> (всегда отличается от анимации предпросмотра, получаемой через <a href="/constructor/videoSize">videoSize</a> типа <code>f</code>, как описано <a href="/api/stickers#premium-animated-sticker-effects">здесь »</a>).</td></tr></tbody></table>

### Тип

[AvailableEffect](/type/AvailableEffect/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [videoSize](/constructor/videoSize/)

[Анимированная фотография профиля](/api/files/#animated-profile-pictures) в формате MPEG4

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [document](/constructor/document/)

Документ

#### [messages.availableEffects](/constructor/messages.availableEffects/)

Полный список доступных [анимированных эффектов для сообщений »](/api/effects/).
