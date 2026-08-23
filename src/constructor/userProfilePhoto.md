---
title: "userProfilePhoto (конструктор)"
original: "https://core.telegram.org/constructor/userProfilePhoto"
section: ref
kind: constructor
layout: layout.njk
---

# userProfilePhoto

*Конструктор из схемы TL.*

> User profile photo.

## Определение TL

```
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether an [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) is available for this user |
| personal | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this profile photo is only visible to us (i.e. it was set using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)). |
| photo_id | [long](/type/long/) | Identifier of the respective photo |
| stripped_thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[bytes](/type/bytes/) | [Stripped thumbnail](https://core.telegram.org/api/files/#stripped-thumbnails) |
| dc_id | [int](/type/int/) | DC ID where the photo is stored |

## Тип

[UserProfilePhoto](/type/UserProfilePhoto/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.
