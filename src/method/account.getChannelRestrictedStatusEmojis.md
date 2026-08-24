---
title: "account.getChannelRestrictedStatusEmojis"
original: "https://core.telegram.org/method/account.getChannelRestrictedStatusEmojis"
section: ref
kind: method
description: "Возвращает полный список идентификаторов пользовательских эмодзи », которые нельзя использовать в эмодзи-статусах каналов »."
layout: layout.njk
---

# account.getChannelRestrictedStatusEmojis

Возвращает полный список [идентификаторов пользовательских эмодзи »](/api/custom-emoji/), которые нельзя использовать в [эмодзи-статусах каналов »](/api/emoji-status/).

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
---functions---
account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;
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

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
