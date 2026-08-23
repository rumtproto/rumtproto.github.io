---
title: "payments.craftStarGift (метод)"
original: "https://core.telegram.org/method/payments.craftStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.craftStarGift

*Метод из схемы TL.*

> Craft a new [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) by combining 1 to 4 owned collectible gifts of the same base gift type.
> The passed gifts must all have the same [starGiftUnique](/constructor/starGiftUnique/).`gift_id`, must be usable for crafting, and must not be blocked by a future `can_craft_at` timestamp.
> The first passed gift must not be [located on the TON blockchain](https://core.telegram.org/api/gifts#hosted-collectible-gifts).

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [Vector](https://core.telegram.org/type/Vector%20t)<[InputSavedStarGift](/type/InputSavedStarGift/)> | 1 to 4 owned collectible gifts of the same type to use for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts). The first gift's ID is reused if crafting succeeds. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SAVED_ID_EMPTY | The passed inputSavedStarGiftChat.saved_id is empty. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.
