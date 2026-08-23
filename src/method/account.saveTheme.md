---
title: "account.saveTheme (метод)"
original: "https://core.telegram.org/method/account.saveTheme"
section: ref
kind: method
layout: layout.njk
---

# account.saveTheme

*Метод из схемы TL.*

> Save a theme

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveTheme#f257106c theme:InputTheme unsave:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| theme | [InputTheme](/type/InputTheme/) | Theme to save |
| unsave | [Bool](/type/Bool/) | Unsave |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | THEME_INVALID | Invalid theme provided. |
