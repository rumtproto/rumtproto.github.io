---
title: "phone.sendGroupCallEncryptedMessage (метод)"
original: "https://core.telegram.org/method/phone.sendGroupCallEncryptedMessage"
section: ref
kind: method
layout: layout.njk
---

# phone.sendGroupCallEncryptedMessage

*Метод из схемы TL.*

> Send an E2E-encrypted message or emoji reaction to all participants of a conference call. This method can only be used with conferences; see [here »](https://core.telegram.org/api/end-to-end/group-calls#conference-in-call-messages) for the serialization and encryption process.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Conference call that should receive the encrypted message or reaction |
| encrypted_message | [bytes](/type/bytes/) | Complete encrypted message or reaction packet produced as specified [here »](https://core.telegram.org/api/end-to-end/group-calls#encrypting-and-sending-a-message) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
