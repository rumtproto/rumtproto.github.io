---
title: "phone.receivedCall (метод)"
original: "https://core.telegram.org/method/phone.receivedCall"
section: ref
kind: method
layout: layout.njk
---

# phone.receivedCall

*Метод из схемы TL.*

> Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended, see [here »](https://core.telegram.org/api/calls#one-to-one-calls) for more info on the full flow.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | The phone call we're currently in |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_ALREADY_DECLINED | The call was already declined. |
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
