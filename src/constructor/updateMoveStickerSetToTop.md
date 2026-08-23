---
title: "updateMoveStickerSetToTop (конструктор)"
original: "https://core.telegram.org/constructor/updateMoveStickerSetToTop"
section: ref
kind: constructor
layout: layout.njk
---

# updateMoveStickerSetToTop

*Конструктор из схемы TL.*

> A stickerset was just moved to top, [see here for more info »](https://core.telegram.org/api/stickers#recent-stickersets)

## Определение TL

```
updateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | This update is referring to a [mask stickerset](https://core.telegram.org/api/stickers#mask-stickers) |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | This update is referring to a [custom emoji stickerset](https://core.telegram.org/api/custom-emoji) |
| stickerset | [long](/type/long/) | [Stickerset](https://core.telegram.org/api/stickers) ID |

## Тип

[Update](/type/Update/)

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
