---
title: "EmojiGroup (тип)"
original: "https://core.telegram.org/type/EmojiGroup"
section: ref
kind: type
layout: layout.njk
---

# EmojiGroup

*Тип из схемы TL.*

> Represents an [emoji category](https://core.telegram.org/api/emoji-categories).

## Определение TL

```
emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emojiGroup](/constructor/emojiGroup/) | Represents an [emoji category](https://core.telegram.org/api/emoji-categories). |
| [emojiGroupGreeting](/constructor/emojiGroupGreeting/) | Represents an [emoji category](https://core.telegram.org/api/emoji-categories), that should be moved to the top of the list when choosing a sticker for a [business introduction](https://core.telegram.org/api/business#business-introduction) |
| [emojiGroupPremium](/constructor/emojiGroupPremium/) | An [emoji category](https://core.telegram.org/api/emoji-categories), used to select all [Premium](https://core.telegram.org/api/premium)-only stickers (i.e. those with a [Premium effect »](https://core.telegram.org/api/stickers#premium-animated-sticker-effects))/[Premium](https://core.telegram.org/api/premium)-only [custom emojis](https://core.telegram.org/api/custom-emoji) (i.e. those where the [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).free flag is not set) |

## Related pages

#### [Emoji categories](https://core.telegram.org/api/emoji-categories)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
