---
title: "DisallowedGiftsSettings (тип)"
original: "https://core.telegram.org/type/DisallowedGiftsSettings"
section: ref
kind: type
layout: layout.njk
---

# DisallowedGiftsSettings

*Тип из схемы TL.*

> Disallow the reception of specific [gift](https://core.telegram.org/api/gifts) types.

## Определение TL

```
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = DisallowedGiftsSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/) | Disallow the reception of specific [gift](https://core.telegram.org/api/gifts) types. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
