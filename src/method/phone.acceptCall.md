---
title: "phone.acceptCall (метод)"
original: "https://core.telegram.org/method/phone.acceptCall"
section: ref
kind: method
layout: layout.njk
---

# phone.acceptCall

*Метод из схемы TL.*

> Accept incoming call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

## Определение TL

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | The call to accept |
| g_b | [bytes](/type/bytes/) | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Phone call settings |

## Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_ALREADY_ACCEPTED | The call was already accepted. |
| 400 | CALL_ALREADY_DECLINED | The call was already declined. |
| 500 | CALL_OCCUPY_FAILED | The call failed because the user is already making another call. |
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |
| 406 | CALL_PROTOCOL_COMPAT_LAYER_INVALID | The other side of the call does not support any of the VoIP protocols supported by the local client, as specified by the protocol.layer and protocol.library_versions fields. |
| 400 | CALL_PROTOCOL_FLAGS_INVALID | Call protocol flags invalid. |
| 400 | CALL_PROTOCOL_LAYER_INVALID | The specified protocol layer version range is invalid. |

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
