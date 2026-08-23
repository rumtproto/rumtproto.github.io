---
title: "peerColor (конструктор)"
original: "https://core.telegram.org/constructor/peerColor"
section: ref
kind: constructor
layout: layout.njk
---

# peerColor

*Конструктор из схемы TL.*

> Represents a [color palette »](https://core.telegram.org/api/colors).

## Определение TL

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Color palette ID, see here »](https://core.telegram.org/api/colors) for more info; if not set, the default palette should be used. |
| background_emoji_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | Optional [custom emoji ID](https://core.telegram.org/api/custom-emoji) used to generate the pattern. |

## Тип

[PeerColor](/type/PeerColor/)

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
