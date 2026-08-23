---
title: "account.savedRingtoneConverted (конструктор)"
original: "https://core.telegram.org/constructor/account.savedRingtoneConverted"
section: ref
kind: constructor
layout: layout.njk
---

# account.savedRingtoneConverted

*Конструктор из схемы TL.*

> The notification sound was not in MP3 format and was successfully converted and saved, use the returned [Document](/type/Document/) to refer to the notification sound from now on

## Определение TL

```
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| document | [Document](/type/Document/) | The converted notification sound |

## Тип

[account.SavedRingtone](/type/account.SavedRingtone/)

## Related pages

#### [Document](/type/Document/)

A document.
