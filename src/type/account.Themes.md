---
title: "account.Themes (тип)"
original: "https://core.telegram.org/type/account.Themes"
section: ref
kind: type
layout: layout.njk
---

# account.Themes

*Тип из схемы TL.*

> Installed themes

## Определение TL

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;

---functions---

account.getThemes#7206e458 format:string hash:long = account.Themes;
account.getChatThemes#d638de89 hash:long = account.Themes;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.themesNotModified](/constructor/account.themesNotModified/) | No new themes were installed |
| [account.themes](/constructor/account.themes/) | Installed themes |

## Методы

| Method | Описание |
|---|---|
| [account.getThemes](/method/account.getThemes/) | Get installed themes |
| [account.getChatThemes](/method/account.getChatThemes/) | Get all available chat [themes »](https://core.telegram.org/api/themes). |
