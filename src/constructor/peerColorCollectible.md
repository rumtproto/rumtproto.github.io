---
title: "peerColorCollectible"
original: "https://core.telegram.org/constructor/peerColorCollectible"
section: ref
kind: constructor
description: "Представляет цветовую палитру », связанную с коллекционным подарком »; подробнее см. здесь »."
layout: layout.njk
---

# peerColorCollectible

Представляет [цветовую палитру »](/api/colors/), связанную с [коллекционным подарком »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/colors/#collectible-gift-palettes).

```
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr><tr><td><strong>gift_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор пользовательского эмодзи »</a> коллекционного подарка: одну копию этого пользовательского эмодзи следует отображать как есть (без перекрашивания, в отличие от <code>background_emoji_id</code>) в правом верхнем углу палитры.</td></tr><tr><td><strong>background_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/custom-emoji">Идентификатор пользовательского эмодзи »</a>, по которому строится узор.</td></tr><tr><td><strong>accent_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Акцентный цвет в формате RGB24, используемый для фона ответов и имени пользователя в сообщениях.</td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>1–3 цвета RGB24, используемые в полосе ответа.</td></tr><tr><td><strong>dark_accent_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Акцентный цвет в формате RGB24, используемый для фона ответов и имени пользователя в сообщениях в тёмной теме (при отсутствии используется <code>accent_color</code>).</td></tr><tr><td><strong>dark_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>1–3 цвета RGB24, используемые в полосе ответа в тёмной теме (если отсутствует, используется <code>colors</code>).</td></tr></tbody></table>

### Тип

[PeerColor](/type/PeerColor/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
