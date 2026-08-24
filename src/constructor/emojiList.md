---
title: "emojiList"
original: "https://core.telegram.org/constructor/emojiList"
section: ref
kind: constructor
description: "Представляет список пользовательских эмодзи."
layout: layout.njk
---

# emojiList

Представляет список [пользовательских эмодзи](/api/custom-emoji/).

```
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользовательских эмодзи</td></tr></tbody></table>

### Тип

[EmojiList](/type/EmojiList/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
