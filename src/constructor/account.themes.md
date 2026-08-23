---
title: "account.themes (конструктор)"
original: "https://core.telegram.org/constructor/account.themes"
section: ref
kind: constructor
layout: layout.njk
---

# account.themes

*Конструктор из схемы TL.*

> Installed themes

## Определение TL

```
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| themes | [Vector](https://core.telegram.org/type/Vector%20t)<[Theme](/type/Theme/)> | Themes |

## Тип

[account.Themes](/type/account.Themes/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
