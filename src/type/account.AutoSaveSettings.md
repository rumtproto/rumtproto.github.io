---
title: "account.AutoSaveSettings (тип)"
original: "https://core.telegram.org/type/account.AutoSaveSettings"
section: ref
kind: type
layout: layout.njk
---

# account.AutoSaveSettings

*Тип из схемы TL.*

> Contains media autosave settings

## Определение TL

```
account.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;

---functions---

account.getAutoSaveSettings#adcbbcda = account.AutoSaveSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.autoSaveSettings](/constructor/account.autoSaveSettings/) | Contains media autosave settings |

## Методы

| Method | Описание |
|---|---|
| [account.getAutoSaveSettings](/method/account.getAutoSaveSettings/) | Get autosave settings |
