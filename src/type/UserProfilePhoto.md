---
title: "UserProfilePhoto (тип)"
original: "https://core.telegram.org/type/UserProfilePhoto"
section: ref
kind: type
layout: layout.njk
---

# UserProfilePhoto

*Тип из схемы TL.*

> Object contains info on the user's profile photo.

## Определение TL

```
userProfilePhotoEmpty#4f11bae1 = UserProfilePhoto;
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [userProfilePhotoEmpty](/constructor/userProfilePhotoEmpty/) | Profile photo has not been set, or was hidden. |
| [userProfilePhoto](/constructor/userProfilePhoto/) | User profile photo. |
