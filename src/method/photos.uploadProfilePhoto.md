---
title: "photos.uploadProfilePhoto (метод)"
original: "https://core.telegram.org/method/photos.uploadProfilePhoto"
section: ref
kind: method
layout: layout.njk
---

# photos.uploadProfilePhoto

*Метод из схемы TL.*

> Updates current user profile photo.
> The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

## Определение TL

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;
---functions---
photos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| fallback | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. |
| bot | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[InputUser](/type/InputUser/) | Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. |
| file | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](/type/InputFile/) | Profile photo |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputFile](/type/InputFile/) | [Animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) video |
| video_start_ts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[double](/type/double/) | Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if video or video_emoji_markup is set. |
| video_emoji_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[VideoSize](/type/VideoSize/) | Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) or a [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) constructor. |

## Результат

[photos.Photo](/type/photos.Photo/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ALBUM_PHOTOS_TOO_MANY | You have uploaded too many profile photos, delete some before retrying. |
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | EMOJI_MARKUP_INVALID | The specified video_emoji_markup was invalid. |
| 400 | FILE_PARTS_INVALID | The number of file parts is invalid. |
| 400 | IMAGE_PROCESS_FAILED | Failure while processing image. |
| 400 | PHOTO_CROP_FILE_MISSING | Photo crop file missing. |
| 400 | PHOTO_CROP_SIZE_SMALL | Photo is too small. |
| 400 | PHOTO_EXT_INVALID | The extension of the photo is invalid. |
| 400 | PHOTO_FILE_MISSING | Profile photo file missing. |
| 400 | PHOTO_INVALID | Photo invalid. |
| 400 | STICKER_MIME_INVALID | The specified sticker MIME type is invalid. |
| 400 | VIDEO_FILE_INVALID | The specified video file is invalid. |

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers).
