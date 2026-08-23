---
title: "inputPeerNotifySettings (конструктор)"
original: "https://core.telegram.org/constructor/inputPeerNotifySettings"
section: ref
kind: constructor
layout: layout.njk
---

# inputPeerNotifySettings

*Конструктор из схемы TL.*

> Notification settings.

## Определение TL

```
inputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| show_previews | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | If the text of the message shall be displayed in notification |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | Peer was muted? |
| mute_until | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Date until which all notifications shall be switched off |
| sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[NotificationSound](/type/NotificationSound/) | Identifier of an audio file to play for notifications. |
| stories_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Bool](/type/Bool/) | Whether story notifications should be disabled. |
| stories_hide_sender | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Bool](/type/Bool/) | Whether the sender name should be displayed in story notifications. |
| stories_sound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[NotificationSound](/type/NotificationSound/) | Identifier of an audio file to play for story notifications. |

## Тип

[InputPeerNotifySettings](/type/InputPeerNotifySettings/)
