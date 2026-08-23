---
title: "phone.saveCallDebug (метод)"
original: "https://core.telegram.org/method/phone.saveCallDebug"
section: ref
kind: method
layout: layout.njk
---

# phone.saveCallDebug

*Метод из схемы TL.*

> Send [phone call](https://core.telegram.org/api/calls#call-debug) debug data to server.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | Phone call |
| debug | [DataJSON](/type/DataJSON/) | Debug statistics obtained from tgcalls |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |
| 400 | DATA_JSON_INVALID | The provided JSON data is invalid. |

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
