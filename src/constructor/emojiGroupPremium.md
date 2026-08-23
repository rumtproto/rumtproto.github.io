---
title: "emojiGroupPremium (конструктор)"
original: "https://core.telegram.org/constructor/emojiGroupPremium"
section: ref
kind: constructor
layout: layout.njk
---

# emojiGroupPremium

*Конструктор из схемы TL.*

> An [emoji category](https://core.telegram.org/api/emoji-categories), used to select all [Premium](https://core.telegram.org/api/premium)\-only stickers (i.e. those with a [Premium effect »](https://core.telegram.org/api/stickers#premium-animated-sticker-effects))/[Premium](https://core.telegram.org/api/premium)\-only [custom emojis](https://core.telegram.org/api/custom-emoji) (i.e. those where the [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` flag is **not** set)

## Определение TL

```
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Category name, i.e. "Animals", "Flags", "Faces" and so on... |
| icon_emoji_id | [long](/type/long/) | A single custom emoji used as preview for the category. |

## Тип

[EmojiGroup](/type/EmojiGroup/)

## Related pages

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
