---
title: "account.autoSaveSettings (конструктор)"
original: "https://core.telegram.org/constructor/account.autoSaveSettings"
section: ref
kind: constructor
layout: layout.njk
---

# account.autoSaveSettings

*Конструктор из схемы TL.*

> Contains media autosave settings

## Определение TL

```
account.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| users_settings | [AutoSaveSettings](/type/AutoSaveSettings/) | Default media autosave settings for private chats |
| chats_settings | [AutoSaveSettings](/type/AutoSaveSettings/) | Default media autosave settings for [groups and supergroups](https://core.telegram.org/api/channel) |
| broadcasts_settings | [AutoSaveSettings](/type/AutoSaveSettings/) | Default media autosave settings for [channels](https://core.telegram.org/api/channel) |
| exceptions | [Vector](https://core.telegram.org/type/Vector%20t)<[AutoSaveException](/type/AutoSaveException/)> | Peer-specific granular autosave settings |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the peer-specific granular autosave settings |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the peer-specific granular autosave settings |

## Тип

[account.AutoSaveSettings](/type/account.AutoSaveSettings/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
