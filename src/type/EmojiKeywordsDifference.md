---
title: "EmojiKeywordsDifference (тип)"
original: "https://core.telegram.org/type/EmojiKeywordsDifference"
section: ref
kind: type
layout: layout.njk
---

# EmojiKeywordsDifference

*Тип из схемы TL.*

> New emoji keywords

## Определение TL

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;

---functions---

messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emojiKeywordsDifference](/constructor/emojiKeywordsDifference/) | Changes to emoji keywords |

## Методы

| Method | Описание |
|---|---|
| [messages.getEmojiKeywords](/method/messages.getEmojiKeywords/) | Get localized [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). |
| [messages.getEmojiKeywordsDifference](/method/messages.getEmojiKeywordsDifference/) | Get changed [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). |
