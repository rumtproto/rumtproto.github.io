---
title: "account.SavedRingtones (тип)"
original: "https://core.telegram.org/type/account.SavedRingtones"
section: ref
kind: type
layout: layout.njk
---

# account.SavedRingtones

*Тип из схемы TL.*

> Contains a list of saved notification sounds

## Определение TL

```
account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;

---functions---

account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.savedRingtonesNotModified](/constructor/account.savedRingtonesNotModified/) | The notification sound list hasn't changed. |
| [account.savedRingtones](/constructor/account.savedRingtones/) | A list of saved notification sounds |

## Методы

| Method | Описание |
|---|---|
| [account.getSavedRingtones](/method/account.getSavedRingtones/) | Fetch saved notification sounds |
