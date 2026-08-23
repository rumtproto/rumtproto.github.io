---
title: "messages.getEmojiKeywords (метод)"
original: "https://core.telegram.org/method/messages.getEmojiKeywords"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiKeywords

*Метод из схемы TL.*

> Get localized [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords).

## Определение TL

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code |

## Результат

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
