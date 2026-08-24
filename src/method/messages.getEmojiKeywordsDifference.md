---
title: "messages.getEmojiKeywordsDifference"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsDifference"
section: ref
kind: method
description: "Получить изменённые ключевые слова эмодзи »."
layout: layout.njk
---

# messages.getEmojiKeywordsDifference

Получить изменённые [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords).

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка</td></tr><tr><td><strong>from_version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Предыдущая версия (<code>version</code>) сохранённого списка ключевых слов эмодзи</td></tr></tbody></table>

### Результат

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
