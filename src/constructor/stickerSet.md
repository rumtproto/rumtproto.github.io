---
title: "stickerSet (конструктор)"
original: "https://core.telegram.org/constructor/stickerSet"
section: ref
kind: constructor
layout: layout.njk
---

# stickerSet

*Конструктор из схемы TL.*

> Represents a stickerset (stickerpack)

## Определение TL

```
stickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| archived | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this stickerset was archived (due to too many saved stickers in the current account) |
| official | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is this stickerset official |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Is this a mask stickerset |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | This is a custom emoji stickerset |
| text_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether the color of this TGS custom emoji stickerset should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. |
| channel_emoji_status | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | If set, this custom emoji stickerset can be used in [channel/supergroup emoji statuses](https://core.telegram.org/api/emoji-status). |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether we created this stickerset |
| installed_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | When was this stickerset installed |
| id | [long](/type/long/) | ID of the stickerset |
| access_hash | [long](/type/long/) | Access hash of stickerset |
| title | [string](/type/string/) | Title of stickerset |
| short_name | [string](/type/string/) | Short name of stickerset, used when sharing stickerset using [stickerset deep links](https://core.telegram.org/api/links#stickerset-links). |
| thumbs | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[PhotoSize](/type/PhotoSize/)> | Stickerset thumbnail |
| thumb_dc_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | DC ID of thumbnail |
| thumb_version | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Thumbnail version |
| thumb_document_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[long](/type/long/) | Document ID of custom emoji thumbnail, fetch the document using [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) |
| count | [int](/type/int/) | Number of stickers in pack |
| hash | [int](/type/int/) | Hash |

## Тип

[StickerSet](/type/StickerSet/)

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji).

Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.
