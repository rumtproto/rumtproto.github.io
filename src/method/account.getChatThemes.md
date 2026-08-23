---
title: "account.getChatThemes (метод)"
original: "https://core.telegram.org/method/account.getChatThemes"
section: ref
kind: method
layout: layout.njk
---

# account.getChatThemes

*Метод из схемы TL.*

> Get all available chat [themes »](https://core.telegram.org/api/themes).

## Определение TL

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
---functions---
account.getChatThemes#d638de89 hash:long = account.Themes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[account.Themes](/type/account.Themes/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.
