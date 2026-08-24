---
title: "channels.setEmojiStickers"
original: "https://core.telegram.org/method/channels.setEmojiStickers"
section: ref
kind: method
description: "Задать набор пользовательских эмодзи для супергрупп. Использовать можно только после достижения как минимум уровня буста », указанного в параметре конфигурации…"
layout: layout.njk
---

# channels.setEmojiStickers

Задать [набор пользовательских эмодзи](/api/custom-emoji/) для супергрупп. Использовать можно только после достижения как минимум [уровня буста »](/api/boost/), указанного в параметре конфигурации [`group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setEmojiStickers#3cd930b7 channel:InputChannel stickerset:InputStickerSet = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Супергруппа</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор пользовательских эмодзи, привязываемый к супергруппе</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
