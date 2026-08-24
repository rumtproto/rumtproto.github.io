---
title: "account.getDefaultBackgroundEmojis"
original: "https://core.telegram.org/method/account.getDefaultBackgroundEmojis"
section: ref
kind: method
description: "Получить набор рекомендуемых стикеров пользовательских эмодзи, которые можно использовать в узоре акцентного цвета."
layout: layout.njk
---

# account.getDefaultBackgroundEmojis

Получить набор рекомендуемых [стикеров пользовательских эмодзи](/api/custom-emoji/), которые можно использовать в [узоре акцентного цвета](/api/colors/).

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
---functions---
account.getDefaultBackgroundEmojis#a60ab9ce hash:long = EmojiList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[EmojiList](/type/EmojiList/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
