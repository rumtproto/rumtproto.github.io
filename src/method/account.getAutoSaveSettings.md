---
title: "account.getAutoSaveSettings (метод)"
original: "https://core.telegram.org/method/account.getAutoSaveSettings"
section: ref
kind: method
layout: layout.njk
---

# account.getAutoSaveSettings

*Метод из схемы TL.*

> Get autosave settings

## Определение TL

```
account.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;
---functions---
account.getAutoSaveSettings#adcbbcda = account.AutoSaveSettings;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.AutoSaveSettings](/type/account.AutoSaveSettings/)

## Only users can use this method
