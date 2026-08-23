---
title: "account.getNotifySettings (метод)"
original: "https://core.telegram.org/method/account.getNotifySettings"
section: ref
kind: method
layout: layout.njk
---

# account.getNotifySettings

*Метод из схемы TL.*

> Gets current notification settings for a given user/group, from all users/all groups.

## Определение TL

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;
---functions---
account.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputNotifyPeer](/type/InputNotifyPeer/) | Notification source |

## Результат

[PeerNotifySettings](/type/PeerNotifySettings/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
