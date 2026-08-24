---
title: "messages.getEmojiStickers"
original: "https://core.telegram.org/method/messages.getEmojiStickers"
section: ref
kind: method
description: "Получает список установленных на данный момент наборов стикеров с пользовательскими эмодзи."
layout: layout.njk
---

# messages.getEmojiStickers

Получает список установленных на данный момент [наборов стикеров с пользовательскими эмодзи](/api/custom-emoji/).

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
---functions---
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.AllStickers](/type/messages.AllStickers/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
