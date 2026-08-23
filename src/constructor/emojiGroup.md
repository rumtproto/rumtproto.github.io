---
title: "emojiGroup (конструктор)"
original: "https://core.telegram.org/constructor/emojiGroup"
section: ref
kind: constructor
layout: layout.njk
---

# emojiGroup

*Конструктор из схемы TL.*

> Represents an [emoji category](https://core.telegram.org/api/emoji-categories).

## Определение TL

```
emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Category name, i.e. "Animals", "Flags", "Faces" and so on... |
| icon_emoji_id | [long](/type/long/) | A single custom emoji used as preview for the category. |
| emoticons | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | A list of UTF-8 emojis, matching the category. |

## Тип

[EmojiGroup](/type/EmojiGroup/)

## Related pages

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
