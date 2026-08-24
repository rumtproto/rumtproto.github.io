---
title: "messages.searchEmojiStickerSets"
original: "https://core.telegram.org/method/messages.searchEmojiStickerSets"
section: ref
kind: method
description: "Поиск наборов стикеров с пользовательскими эмодзи »"
layout: layout.njk
---

# messages.searchEmojiStickerSets

Поиск [наборов стикеров с пользовательскими эмодзи »](/api/custom-emoji/)

```
messages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;
---functions---
messages.searchEmojiStickerSets#92b4494c flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>exclude_featured</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Исключить из результатов рекомендуемые наборы стикеров</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Строка запроса</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
