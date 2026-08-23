---
title: "payments.getSavedStarGift (метод)"
original: "https://core.telegram.org/method/payments.getSavedStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.getSavedStarGift

*Метод из схемы TL.*

> Fetch info about specific [gifts](https://core.telegram.org/api/gifts) owned by a peer we control.
> Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned to the profile).

## Определение TL

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
---functions---
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | List of gifts to fetch info about. |

## Результат

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SAVED_ID_EMPTY | The passed inputSavedStarGiftChat.saved_id is empty. |
| 400 | STARGIFT_OWNER_INVALID | You cannot transfer or sell a gift owned by another user. |
| 400 | STARGIFT_SLUG_INVALID | The specified gift slug is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
