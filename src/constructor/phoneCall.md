---
title: "phoneCall (конструктор)"
original: "https://core.telegram.org/constructor/phoneCall"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCall

*Конструктор из схемы TL.*

> Phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

## Определение TL

```
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| p2p_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether P2P connection to the other peer is allowed |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether this is a video call |
| conference_supported | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, the other party supports [migrating the call to a conference call »](https://core.telegram.org/api/calls#migrating-to-a-conference-call); clients should only offer the migrate/"Add participants" option in the call UI when this flag is set. |
| id | [long](/type/long/) | Call ID |
| access_hash | [long](/type/long/) | Access hash |
| date | [int](/type/int/) | Date of creation of the call |
| admin_id | [long](/type/long/) | User ID of the creator of the call |
| participant_id | [long](/type/long/) | User ID of the other participant in the call |
| g_a_or_b | [bytes](/type/bytes/) | [Parameter for key exchange](https://core.telegram.org/api/end-to-end/voice-calls) |
| key_fingerprint | [long](/type/long/) | [Key fingerprint](https://core.telegram.org/api/end-to-end/voice-calls) |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Call protocol info to be passed to libtgvoip |
| connections | [Vector](https://core.telegram.org/type/Vector%20t)<[PhoneConnection](/type/PhoneConnection/)> | List of endpoints the user can connect to exchange call data |
| start_date | [int](/type/int/) | When was the call actually started |
| custom_parameters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[DataJSON](/type/DataJSON/) | Custom JSON-encoded call parameters to be passed to tgcalls. |

## Тип

[PhoneCall](/type/PhoneCall/)

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.
