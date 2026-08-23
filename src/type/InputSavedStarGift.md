---
title: "InputSavedStarGift (тип)"
original: "https://core.telegram.org/type/InputSavedStarGift"
section: ref
kind: type
layout: layout.njk
---

# InputSavedStarGift

*Тип из схемы TL.*

> Points to a [gift »](https://core.telegram.org/api/gifts).

## Определение TL

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) | A gift received in a private chat with another user. |
| [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) | A gift received by a channel we own. |
| [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/) | Points to a [collectible gift obtained from a collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link). |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
