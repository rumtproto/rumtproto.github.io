---
title: "messageActionSuggestProfilePhoto (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSuggestProfilePhoto"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSuggestProfilePhoto

*Конструктор из схемы TL.*

> A new profile picture was suggested using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

## Определение TL

```
messageActionSuggestProfilePhoto#57de635e photo:Photo = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| photo | [Photo](/type/Photo/) | The photo that the user suggested we set as profile picture. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.
