---
title: "disallowedGiftsSettings (конструктор)"
original: "https://core.telegram.org/constructor/disallowedGiftsSettings"
section: ref
kind: constructor
layout: layout.njk
---

# disallowedGiftsSettings

*Конструктор из схемы TL.*

> Disallow the reception of specific [gift](https://core.telegram.org/api/gifts) types.

## Определение TL

```
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = DisallowedGiftsSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| disallow_unlimited_stargifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Disallow the reception of gifts with an unlimited supply (those with the [starGift](/constructor/starGift/).limited flag not set). |
| disallow_limited_stargifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Disallow the reception of limited-supply gifts (those with the [starGift](/constructor/starGift/).limited flag set). |
| disallow_unique_stargifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Disallow the reception of [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts). |
| disallow_premium_gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Disallow the reception of [gifted Telegram Premium subscriptions »](https://core.telegram.org/api/gifts#collectible-gifts). |
| disallow_stargifts_from_channels | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Disallow the reception of gifts sent by channels. |

## Тип

[DisallowedGiftsSettings](/type/DisallowedGiftsSettings/)

## Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
