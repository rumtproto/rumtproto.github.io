---
title: "help.peerColorOption"
original: "https://core.telegram.org/constructor/help.peerColorOption"
section: ref
kind: constructor
description: "Содержит информацию о цветовой палитре »."
layout: layout.njk
---

# help.peerColorOption

Содержит информацию о [цветовой палитре »](/api/colors/).

```
help.peerColorOption#adec6ebe flags:# hidden:flags.0?true color_id:int colors:flags.1?help.PeerColorSet dark_colors:flags.2?help.PeerColorSet channel_min_level:flags.3?int group_min_level:flags.4?int = help.PeerColorOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли скрывать эту палитру из списка вариантов при выборе палитры для оформления профиля или акцентов в сообщениях.</td></tr><tr><td><strong>color_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор палитры.</td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/help.PeerColorSet">help.PeerColorSet</a></td><td>Палитра для светлой темы.<br>Будет пустой для идентификаторов от <code>0</code> до <code>6</code> включительно; в этом случае следует использовать палитру из одного цвета, выбранного из следующих: красный, оранжевый, фиолетовый, зелёный, голубой, синий, розовый для индексов от 0 до 6 (то есть те же цвета, что и в <a href="/api/colors#randomized-fallback-color-palette">случайной резервной цветовой палитре</a>).</td></tr><tr><td><strong>dark_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/help.PeerColorSet">help.PeerColorSet</a></td><td>Палитра для тёмной темы. Необязательное поле; если отсутствует, используется палитра из <code>colors</code> (или автоматически сгенерированная палитра для идентификаторов от <code>0</code> до <code>6</code>).</td></tr><tr><td><strong>channel_min_level</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Каналы могут использовать эту палитру только после достижения как минимум <a href="/api/boost">уровня бустов</a>, указанного в этом поле.</td></tr><tr><td><strong>group_min_level</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Супергруппы могут использовать эту палитру только после достижения как минимум <a href="/api/boost">уровня бустов</a>, указанного в этом поле.</td></tr></tbody></table>

### Тип

[help.PeerColorOption](/type/help.PeerColorOption/)

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
