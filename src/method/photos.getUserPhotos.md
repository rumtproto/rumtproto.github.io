---
title: "photos.getUserPhotos (метод)"
original: "https://core.telegram.org/method/photos.getUserPhotos"
section: ref
kind: method
layout: layout.njk
---

# photos.getUserPhotos

*Метод из схемы TL.*

> Returns the list of user photos.

## Определение TL

```
photos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;
---functions---
photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User ID |
| offset | [int](/type/int/) | Number of list elements to be skipped |
| max_id | [long](/type/long/) | If a positive value was transferred, the method will return only photos with IDs less than the set one. This parameter is often useful when [refetching file references »](https://core.telegram.org/api/file-references), as in conjuction with limit=1 and offset=-1 the [photo](/constructor/photo/) object with the id specified in max_id can be fetched. |
| limit | [int](/type/int/) | Number of list elements to be returned |

## Результат

[photos.Photos](/type/photos.Photos/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MAX_ID_INVALID | The provided max ID is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.

#### [photo](/constructor/photo/)

Photo
