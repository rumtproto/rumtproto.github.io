---
title: "photos.deletePhotos (метод)"
original: "https://core.telegram.org/method/photos.deletePhotos"
section: ref
kind: method
layout: layout.njk
---

# photos.deletePhotos

*Метод из схемы TL.*

> Deletes profile photos. The method returns a list of successfully deleted photo IDs.

## Определение TL

```
---functions---
photos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPhoto](/type/InputPhoto/)> | Input photos to delete |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)\>

## Only users can use this method
