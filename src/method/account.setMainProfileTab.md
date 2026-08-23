---
title: "account.setMainProfileTab (метод)"
original: "https://core.telegram.org/method/account.setMainProfileTab"
section: ref
kind: method
layout: layout.njk
---

# account.setMainProfileTab

*Метод из схемы TL.*

> Changes the main profile tab of the current user, see [here »](https://core.telegram.org/api/profile#tabs) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setMainProfileTab#5dee78b0 tab:ProfileTab = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| tab | [ProfileTab](/type/ProfileTab/) | The tab to set as main tab. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
