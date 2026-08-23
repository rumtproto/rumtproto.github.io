---
title: "emojiGroupGreeting (конструктор)"
original: "https://core.telegram.org/constructor/emojiGroupGreeting"
section: ref
kind: constructor
layout: layout.njk
---

# emojiGroupGreeting

*Конструктор из схемы TL.*

> Represents an [emoji category](https://core.telegram.org/api/emoji-categories), that should be moved to the top of the list when choosing a sticker for a [business introduction](https://core.telegram.org/api/business#business-introduction)

## Определение TL

```
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
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

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
