---
title: "photos.uploadContactProfilePhoto (метод)"
original: "https://core.telegram.org/method/photos.uploadContactProfilePhoto"
section: ref
kind: method
layout: layout.njk
---

# photos.uploadContactProfilePhoto

*Метод из схемы TL.*

> Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.
> The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

## Определение TL

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;
---functions---
photos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| suggest | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, will send a [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/) service message to user_id, suggesting them to use the specified profile picture; otherwise, will set a personal profile picture for the user (only visible to the current user). |
| save | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, removes a previously set personal profile picture (does not affect suggested profile pictures, to remove them simply delete the [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/) service message with [messages.deleteMessages](/method/messages.deleteMessages/)). |
| user_id | [InputUser](/type/InputUser/) | The contact |
| file | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](/type/InputFile/) | Profile photo |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputFile](/type/InputFile/) | [Animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) video |
| video_start_ts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[double](/type/double/) | Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if video or video_emoji_markup is set. |
| video_emoji_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[VideoSize](/type/VideoSize/) | Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) or a [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) constructor. |

## Результат

[photos.Photo](/type/photos.Photo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CONTACT_MISSING | The specified user is not a contact. |
| 400 | NEED_ACTION_MISSING | The caller didn't specify a valid action (either save or suggest) for the contact profile photo upload. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/)

A new profile picture was suggested using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

#### [messages.deleteMessages](/method/messages.deleteMessages/)

Deletes messages by their identifiers.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers).
