---
title: "emojiStatusCollectible (конструктор)"
original: "https://core.telegram.org/constructor/emojiStatusCollectible"
section: ref
kind: constructor
layout: layout.njk
---

# emojiStatusCollectible

*Конструктор из схемы TL.*

> An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status.
> **Cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method.

## Определение TL

```
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| collectible_id | [long](/type/long/) | ID of the collectible (from [starGiftUnique](/constructor/starGiftUnique/).id). |
| document_id | [long](/type/long/) | ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) representing the status. |
| title | [string](/type/string/) | Name of the collectible. |
| slug | [string](/type/string/) | Unique identifier of the collectible that may be used to create a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link) for the current collectible, or to fetch further info about the collectible using [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/). |
| pattern_document_id | [long](/type/long/) | The ID of a pattern to apply on the profile's backdrop, correlated to the [starGiftAttributePattern](/constructor/starGiftAttributePattern/) from the gift in slug. |
| center_color | [int](/type/int/) | Color of the center of the profile backdrop in RGB24 format, from the gift's [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/). |
| edge_color | [int](/type/int/) | Color of the edges of the profile backdrop in RGB24 format, from the gift's [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/). |
| pattern_color | [int](/type/int/) | Color of the pattern_document_id applied on the profile backdrop in RGB24 format, from the gift's [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/). |
| text_color | [int](/type/int/) | Color of text on the profile backdrop in RGB24 format, from the gift's [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/). |
| until | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, the emoji status will be active until the specified unixtime. |

## Тип

[EmojiStatus](/type/EmojiStatus/)

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/)

Obtain info about a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) using a slug obtained from a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link).

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

A [sticker](https://core.telegram.org/api/stickers) applied on the backdrop of a [collectible gift »](https://core.telegram.org/api/gifts) using a repeating pattern.

#### [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)

The backdrop of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Set an [emoji status](https://core.telegram.org/api/emoji-status)

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.

Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).
