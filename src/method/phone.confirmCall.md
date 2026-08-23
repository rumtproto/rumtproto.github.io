---
title: "phone.confirmCall (метод)"
original: "https://core.telegram.org/method/phone.confirmCall"
section: ref
kind: method
layout: layout.njk
---

# phone.confirmCall

*Метод из схемы TL.*

> [Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls), see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

## Определение TL

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | The phone call |
| g_a | [bytes](/type/bytes/) | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) |
| key_fingerprint | [long](/type/long/) | Key fingerprint |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Phone call settings |

## Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_ALREADY_DECLINED | The call was already declined. |
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
