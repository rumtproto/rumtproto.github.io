---
title: "inputEmojiStatusCollectible (конструктор)"
original: "https://core.telegram.org/constructor/inputEmojiStatusCollectible"
section: ref
kind: constructor
layout: layout.njk
---

# inputEmojiStatusCollectible

*Конструктор из схемы TL.*

> An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.
> Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).

## Определение TL

```
inputEmojiStatusCollectible#7141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| collectible_id | [long](/type/long/) | ID of the collectible (from [starGiftUnique](/constructor/starGiftUnique/).id). |
| until | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, the emoji status will be active until the specified unixtime. |

## Тип

[EmojiStatus](/type/EmojiStatus/)

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Set an [emoji status](https://core.telegram.org/api/emoji-status)

#### [emojiStatusCollectible](/constructor/emojiStatusCollectible/)

An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status.

**Cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method.

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.

Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).
