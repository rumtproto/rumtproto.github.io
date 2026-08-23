---
title: "phone.requestCall (метод)"
original: "https://core.telegram.org/method/phone.requestCall"
section: ref
kind: method
layout: layout.njk
---

# phone.requestCall

*Метод из схемы TL.*

> Start a telegram phone call, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

## Определение TL

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to start a video call |
| user_id | [InputUser](/type/InputUser/) | Destination of the phone call |
| random_id | [int](/type/int/) | Random ID to avoid resending the same object. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| g_a_hash | [bytes](/type/bytes/) | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Phone call settings |

## Результат

[phone.PhoneCall](/type/phone.PhoneCall/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_PROTOCOL_FLAGS_INVALID | Call protocol flags invalid. |
| 400 | CALL_PROTOCOL_LAYER_INVALID | The specified protocol layer version range is invalid. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | PARTICIPANT_VERSION_OUTDATED | The other participant does not use an up to date telegram client with support for calls. |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |
| 403 | USER_PRIVACY_RESTRICTED | The user's privacy settings do not allow you to do this. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
