---
title: "phone.sendSignalingData (метод)"
original: "https://core.telegram.org/method/phone.sendSignalingData"
section: ref
kind: method
layout: layout.njk
---

# phone.sendSignalingData

*Метод из схемы TL.*

> Send VoIP [signaling data](https://core.telegram.org/api/calls#signaling-data) for an ongoing phone call.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | Phone call |
| data | [bytes](/type/bytes/) | Signaling payload |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_NOT_ACTIVE | The specified call is not active. |
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
