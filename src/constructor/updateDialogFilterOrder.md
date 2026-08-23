---
title: "updateDialogFilterOrder (конструктор)"
original: "https://core.telegram.org/constructor/updateDialogFilterOrder"
section: ref
kind: constructor
layout: layout.njk
---

# updateDialogFilterOrder

*Конструктор из схемы TL.*

> New [folder](https://core.telegram.org/api/folders) order

## Определение TL

```
updateDialogFilterOrder#a5d72105 order:Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Ordered [folder IDs](https://core.telegram.org/api/folders) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
