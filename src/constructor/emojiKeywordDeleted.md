---
title: "emojiKeywordDeleted (конструктор)"
original: "https://core.telegram.org/constructor/emojiKeywordDeleted"
section: ref
kind: constructor
layout: layout.njk
---

# emojiKeywordDeleted

*Конструктор из схемы TL.*

> Deleted emoji keyword

## Определение TL

```
emojiKeywordDeleted#236df622 keyword:string emoticons:Vector<string> = EmojiKeyword;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| keyword | [string](/type/string/) | Keyword |
| emoticons | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Emojis that were associated to keyword |

## Тип

[EmojiKeyword](/type/EmojiKeyword/)
