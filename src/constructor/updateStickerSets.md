---
title: "updateStickerSets (конструктор)"
original: "https://core.telegram.org/constructor/updateStickerSets"
section: ref
kind: constructor
layout: layout.njk
---

# updateStickerSets

*Конструктор из схемы TL.*

> Installed stickersets have changed, the client should refetch them as [described in the docs](https://core.telegram.org/api/stickers#installing-stickersets).

## Определение TL

```
updateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether mask stickersets have changed |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the list of installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji) has changed |

## Тип

[Update](/type/Update/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
