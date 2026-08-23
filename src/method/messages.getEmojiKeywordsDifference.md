---
title: "messages.getEmojiKeywordsDifference (метод)"
original: "https://core.telegram.org/method/messages.getEmojiKeywordsDifference"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiKeywordsDifference

*Метод из схемы TL.*

> Get changed [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords).

## Определение TL

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code |
| from_version | [int](/type/int/) | Previous stored emoji keyword list version |

## Результат

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
