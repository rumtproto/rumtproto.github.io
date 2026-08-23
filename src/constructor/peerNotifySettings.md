---
title: "peerNotifySettings (конструктор)"
original: "https://core.telegram.org/constructor/peerNotifySettings"
section: ref
kind: constructor
layout: layout.njk
---

# peerNotifySettings

*Конструктор из схемы TL.*

> Notification settings.

## Определение TL

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| show_previews | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | (Ternary value) If set, indicates whether or not to display previews of messages in notifications; otherwise the default behavior should be used. |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | (Ternary value) If set, indicates whether to mute or unmute the peer; otherwise the default behavior should be used. |
| mute_until | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Mute all notifications until this date |
| ios_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[NotificationSound](/type/NotificationSound/) | Notification sound for the official iOS application |
| android_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[NotificationSound](/type/NotificationSound/) | Notification sound for the official android application |
| other_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[NotificationSound](/type/NotificationSound/) | Notification sound for other applications |
| stories_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Bool](/type/Bool/) | Whether story notifications should be disabled. |
| stories_hide_sender | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Bool](/type/Bool/) | Whether the sender name should be displayed in story notifications. |
| stories_ios_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[NotificationSound](/type/NotificationSound/) | Sound for story notifications on the official iOS application |
| stories_android_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[NotificationSound](/type/NotificationSound/) | Sound for story notifications on the official Android application |
| stories_other_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[NotificationSound](/type/NotificationSound/) | Sound for story notifications on other applications |

## Тип

[PeerNotifySettings](/type/PeerNotifySettings/)

## Event flags (events_mask)

|  |  |
|---|---|
| 0x00000001 | Profile photo update notification |
