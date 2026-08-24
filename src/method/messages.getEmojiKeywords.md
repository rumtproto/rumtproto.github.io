---
title: "messages.getEmojiKeywords"
original: "https://core.telegram.org/method/messages.getEmojiKeywords"
section: ref
kind: method
description: "Получить локализованные ключевые слова эмодзи »."
layout: layout.njk
---

# messages.getEmojiKeywords

Получить локализованные [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords).

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr></tbody></table>

### Результат

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
