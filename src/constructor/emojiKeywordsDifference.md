---
title: "emojiKeywordsDifference (конструктор)"
original: "https://core.telegram.org/constructor/emojiKeywordsDifference"
section: ref
kind: constructor
layout: layout.njk
---

# emojiKeywordsDifference

*Конструктор из схемы TL.*

> Changes to emoji keywords

## Определение TL

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code for keywords |
| from_version | [int](/type/int/) | Previous emoji keyword list version |
| version | [int](/type/int/) | Current version of emoji keyword list |
| keywords | [Vector](https://core.telegram.org/type/Vector%20t)<[EmojiKeyword](/type/EmojiKeyword/)> | Emojis associated to keywords |

## Тип

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)
