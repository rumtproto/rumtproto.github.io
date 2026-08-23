---
title: "messages.getEmojiKeywordsLanguages (метод)"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsLanguages"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiKeywordsLanguages

*Метод из схемы TL.*

> Obtain a list of related languages that must be used when fetching [emoji keyword lists »](https://core.telegram.org/api/custom-emoji#emoji-keywords).
> Usually the method will return the passed language codes (if localized) + `en` + some language codes for similar languages (if applicable).

## Определение TL

```
---functions---
messages.getEmojiKeywordsLanguages#4e9963b2 lang_codes:Vector<string> = Vector<EmojiLanguage>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_codes | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The user's language codes |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[EmojiLanguage](/type/EmojiLanguage/)\>

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
