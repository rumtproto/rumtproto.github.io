---
title: "InputStickerSet (тип)"
original: "https://core.telegram.org/type/InputStickerSet"
section: ref
kind: type
layout: layout.njk
---

# InputStickerSet

*Тип из схемы TL.*

> Represents a stickerset
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> inputStickerSetEmpty#ffb62b95 = InputStickerSet;
> inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
> ```
> API schema:

## Определение TL

```
inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#4c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;
inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputStickerSetShortName](/constructor/inputStickerSetShortName/) | Stickerset by short name, from a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) |
| [inputStickerSetEmpty](/constructor/inputStickerSetEmpty/) | Empty constructor |
| [inputStickerSetID](/constructor/inputStickerSetID/) | Stickerset by ID |
| [inputStickerSetAnimatedEmoji](/constructor/inputStickerSetAnimatedEmoji/) | Animated emojis stickerset |
| [inputStickerSetDice](/constructor/inputStickerSetDice/) | Used for fetching [animated dice stickers](https://core.telegram.org/api/dice) |
| [inputStickerSetAnimatedEmojiAnimations](/constructor/inputStickerSetAnimatedEmojiAnimations/) | Animated emoji reaction stickerset (contains animations to play when a user clicks on a given animated emoji) |
| [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/) | Stickers to show when receiving a gifted Telegram Premium subscription |
| [inputStickerSetEmojiGenericAnimations](/constructor/inputStickerSetEmojiGenericAnimations/) | Generic animation stickerset containing animations to play when [reacting to messages using a normal emoji without a custom animation](https://core.telegram.org/api/reactions) |
| [inputStickerSetEmojiDefaultStatuses](/constructor/inputStickerSetEmojiDefaultStatuses/) | Default [custom emoji status](https://core.telegram.org/api/emoji-status) stickerset |
| [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/) | Default [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset for [forum topic icons](https://core.telegram.org/api/forum#forum-topics) |
| [inputStickerSetEmojiChannelDefaultStatuses](/constructor/inputStickerSetEmojiChannelDefaultStatuses/) | Default [custom emoji status](https://core.telegram.org/api/emoji-status) stickerset for channel statuses |
| [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/) | TON gifts stickerset. |
