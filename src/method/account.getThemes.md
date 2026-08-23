---
title: "account.getThemes (метод)"
original: "https://core.telegram.org/method/account.getThemes"
section: ref
kind: method
layout: layout.njk
---

# account.getThemes

*Метод из схемы TL.*

> Get installed themes

## Определение TL

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
---functions---
account.getThemes#7206e458 format:string hash:long = account.Themes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| format | [string](/type/string/) | Theme format, a string that identifies the theming engines supported by the client |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[account.Themes](/type/account.Themes/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
