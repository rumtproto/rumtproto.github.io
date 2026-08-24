---
title: "messages.getEmojiKeywordsLanguages"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsLanguages"
section: ref
kind: method
description: "Получить список родственных языков, которые необходимо использовать при загрузке списков ключевых слов эмодзи »."
layout: layout.njk
---

# messages.getEmojiKeywordsLanguages

Получить список родственных языков, которые необходимо использовать при загрузке [списков ключевых слов эмодзи »](/api/custom-emoji/#emoji-keywords).

Обычно метод возвращает переданные коды языков (если для них есть локализация) + `en` + несколько кодов языков для схожих языков (если применимо).

```
---functions---
messages.getEmojiKeywordsLanguages#4e9963b2 lang_codes:Vector<string> = Vector<EmojiLanguage>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Коды языков пользователя</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[EmojiLanguage](/type/EmojiLanguage/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
