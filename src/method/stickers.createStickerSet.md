---
title: "stickers.createStickerSet (метод)"
original: "https://core.telegram.org/method/stickers.createStickerSet"
section: ref
kind: method
layout: layout.njk
---

# stickers.createStickerSet

*Метод из схемы TL.*

> Create a stickerset.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a mask stickerset |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this is a [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset. |
| text_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether the color of TGS custom emojis contained in this set should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. For custom emoji stickersets only. |
| user_id | [InputUser](/type/InputUser/) | Stickerset owner |
| title | [string](/type/string/) | Stickerset name, 1-64 chars |
| short_name | [string](/type/string/) | Short name of sticker set, to be used in [sticker deep links »](https://core.telegram.org/api/links#stickerset-links). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and, if called by a bot, must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](/type/InputDocument/) | Thumbnail |
| stickers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStickerSetItem](/type/InputStickerSetItem/)> | Stickers |
| software | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Used when [importing stickers using the sticker import SDKs](https://core.telegram.org/import-stickers), specifies the name of the software that created the stickers |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PACK_SHORT_NAME_INVALID | Short pack name invalid. |
| 400 | PACK_SHORT_NAME_OCCUPIED | A stickerpack with this name already exists. |
| 400 | PACK_TITLE_INVALID | The stickerpack title is invalid. |
| 400 | PACK_TYPE_INVALID | The masks and emojis flags are mutually exclusive. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STICKERS_EMPTY | No sticker provided. |
| 400 | STICKER_EMOJI_INVALID | Sticker emoji invalid. |
| 400 | STICKER_FILE_INVALID | Sticker file invalid. |
| 400 | STICKER_GIF_DIMENSIONS | The specified video sticker has invalid dimensions. |
| 400 | STICKER_PNG_DIMENSIONS | Sticker png dimensions invalid. |
| 400 | STICKER_PNG_NOPNG | One of the specified stickers is not a valid PNG file. |
| 400 | STICKER_TGS_NODOC | You must send the animated sticker as a document. |
| 400 | STICKER_TGS_NOTGS | Invalid TGS sticker provided. |
| 400 | STICKER_THUMB_PNG_NOPNG | Incorrect stickerset thumb file provided, PNG / WEBP expected. |
| 400 | STICKER_THUMB_TGS_NOTGS | Incorrect stickerset TGS thumb file provided. |
| 400 | STICKER_VIDEO_BIG | The specified video sticker is too big. |
| 400 | STICKER_VIDEO_NODOC | You must send the video sticker as a document. |
| 400 | STICKER_VIDEO_NOWEBM | The specified video sticker is not in webm format. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
