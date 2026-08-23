---
title: "channels.setEmojiStickers (метод)"
original: "https://core.telegram.org/method/channels.setEmojiStickers"
section: ref
kind: method
layout: layout.njk
---

# channels.setEmojiStickers

*Метод из схемы TL.*

> Set a [custom emoji stickerset](https://core.telegram.org/api/custom-emoji) for supergroups. Only usable after reaching at least the [boost level »](https://core.telegram.org/api/boost) specified in the [`group_emoji_stickers_level_min` »](https://core.telegram.org/api/config#group-emoji-stickers-level-min) config parameter.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setEmojiStickers#3cd930b7 channel:InputChannel stickerset:InputStickerSet = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The supergroup |
| stickerset | [InputStickerSet](/type/InputStickerSet/) | The custom emoji stickerset to associate to the supergroup |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
