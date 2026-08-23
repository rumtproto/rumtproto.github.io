---
title: "messages.MyStickers (тип)"
original: "https://core.telegram.org/type/messages.MyStickers"
section: ref
kind: type
layout: layout.njk
---

# messages.MyStickers

*Тип из схемы TL.*

> The list of [stickersets owned by the current account »](https://core.telegram.org/api/stickers).

## Определение TL

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;

---functions---

messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.myStickers](/constructor/messages.myStickers/) | The list of [stickersets owned by the current account »](https://core.telegram.org/api/stickers). |

## Методы

| Method | Описание |
|---|---|
| [messages.getMyStickers](/method/messages.getMyStickers/) | Fetch all [stickersets »](https://core.telegram.org/api/stickers) owned by the current user. |

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
