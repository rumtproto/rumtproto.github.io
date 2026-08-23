---
title: "account.updateNotifySettings (метод)"
original: "https://core.telegram.org/method/account.updateNotifySettings"
section: ref
kind: method
layout: layout.njk
---

# account.updateNotifySettings

*Метод из схемы TL.*

> Edits notification settings from a given user/group, from all users/all groups.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputNotifyPeer](/type/InputNotifyPeer/) | Notification source |
| settings | [InputPeerNotifySettings](/type/InputPeerNotifySettings/) | Notification settings |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SETTINGS_INVALID | Invalid settings were provided. |
