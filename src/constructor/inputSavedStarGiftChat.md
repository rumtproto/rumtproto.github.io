---
title: "inputSavedStarGiftChat (конструктор)"
original: "https://core.telegram.org/constructor/inputSavedStarGiftChat"
section: ref
kind: constructor
layout: layout.njk
---

# inputSavedStarGiftChat

*Конструктор из схемы TL.*

> A gift received by a channel we own.

## Определение TL

```
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The channel. |
| saved_id | [long](/type/long/) | ID of the gift, must be the saved_id of a [messageActionStarGift](/constructor/messageActionStarGift/)/[messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) constructor. |

## Тип

[InputSavedStarGift](/type/InputSavedStarGift/)

## Related pages

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](https://core.telegram.org/api/gifts) was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
