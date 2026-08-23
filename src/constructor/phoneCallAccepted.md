---
title: "phoneCallAccepted (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallAccepted"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallAccepted

*Конструктор из схемы TL.*

> An accepted phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

## Определение TL

```
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether this is a video call |
| id | [long](/type/long/) | ID of accepted phone call |
| access_hash | [long](/type/long/) | Access hash of phone call |
| date | [int](/type/int/) | When was the call accepted |
| admin_id | [long](/type/long/) | ID of the call creator |
| participant_id | [long](/type/long/) | ID of the other user in the call |
| g_b | [bytes](/type/bytes/) | B parameter for [secure E2E phone call key exchange](https://core.telegram.org/api/end-to-end/voice-calls) |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Protocol to use for phone call |

## Тип

[PhoneCall](/type/PhoneCall/)

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
