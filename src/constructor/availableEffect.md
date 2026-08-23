---
title: "availableEffect (конструктор)"
original: "https://core.telegram.org/constructor/availableEffect"
section: ref
kind: constructor
layout: layout.njk
---

# availableEffect

*Конструктор из схемы TL.*

> Represents a [message effect »](https://core.telegram.org/api/effects).
> All `long` IDs except for `id` are [document](/constructor/document/).`id`s from the containing [messages.availableEffects](/constructor/messages.availableEffects/) constructor.
> See [here »](https://core.telegram.org/api/effects) for more info on how to use following fields.

## Определение TL

```
availableEffect#93c3e27e flags:# premium_required:flags.2?true id:long emoticon:string static_icon_id:flags.0?long effect_sticker_id:long effect_animation_id:flags.1?long = AvailableEffect;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| premium_required | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether a [Premium](https://core.telegram.org/api/premium) subscription is required to use this effect. |
| id | [long](/type/long/) | Unique effect ID. |
| emoticon | [string](/type/string/) | Emoji corresponding to the effect, to be used as icon for the effect if static_icon_id is not set. |
| static_icon_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the document containing the static icon (WEBP) of the effect. |
| effect_sticker_id | [long](/type/long/) | Contains the preview [animation (TGS format »)](https://core.telegram.org/api/stickers#animated-stickers), used for the effect selection menu. |
| effect_animation_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | If set, contains the actual animated effect [(TGS format »)](https://core.telegram.org/api/stickers#animated-stickers). If not set, the animated effect must be set equal to the [premium animated sticker effect](https://core.telegram.org/api/stickers#premium-animated-sticker-effects) associated to the animated sticker specified in effect_sticker_id (always different from the preview animation, fetched thanks to the [videoSize](/constructor/videoSize/) of type f as specified [here »](https://core.telegram.org/api/stickers#premium-animated-sticker-effects)). |

## Тип

[AvailableEffect](/type/AvailableEffect/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [videoSize](/constructor/videoSize/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) in MPEG4 format

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [document](/constructor/document/)

Document

#### [messages.availableEffects](/constructor/messages.availableEffects/)

The full list of usable [animated message effects »](https://core.telegram.org/api/effects).
