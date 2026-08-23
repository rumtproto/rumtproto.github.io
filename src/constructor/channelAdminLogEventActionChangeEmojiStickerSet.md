---
title: "channelAdminLogEventActionChangeEmojiStickerSet (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeEmojiStickerSet"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangeEmojiStickerSet

*Конструктор из схемы TL.*

> The supergroup's [custom emoji stickerset](https://core.telegram.org/api/boost#setting-a-custom-emoji-stickerset-for-supergroups) was changed.

## Определение TL

```
channelAdminLogEventActionChangeEmojiStickerSet#46d840ab prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_stickerset | [InputStickerSet](/type/InputStickerSet/) | Old value |
| new_stickerset | [InputStickerSet](/type/InputStickerSet/) | New value |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
