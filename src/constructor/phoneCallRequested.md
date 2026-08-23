---
title: "phoneCallRequested (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallRequested"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallRequested

*Конструктор из схемы TL.*

> Requested phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

## Определение TL

```
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether this is a video call |
| id | [long](/type/long/) | Phone call ID |
| access_hash | [long](/type/long/) | Access hash |
| date | [int](/type/int/) | When was the phone call created |
| admin_id | [long](/type/long/) | ID of the creator of the phone call |
| participant_id | [long](/type/long/) | ID of the other participant of the phone call |
| g_a_hash | [bytes](/type/bytes/) | [Parameter for key exchange](https://core.telegram.org/api/end-to-end/voice-calls) |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Call protocol info to be passed to libtgvoip |

## Тип

[PhoneCall](/type/PhoneCall/)

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
