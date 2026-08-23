---
title: "phone.saveCallLog (метод)"
original: "https://core.telegram.org/method/phone.saveCallLog"
section: ref
kind: method
layout: layout.njk
---

# phone.saveCallLog

*Метод из схемы TL.*

> Deprecated: send libtgvoip phone call debug information

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveCallLog#41248786 peer:InputPhoneCall file:InputFile = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPhoneCall](/type/InputPhoneCall/) | Phone call |
| file | [InputFile](/type/InputFile/) | Libtgvoip logs |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CALL_PEER_INVALID | The provided call peer object is invalid. |
