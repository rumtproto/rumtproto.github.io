---
title: "phone.saveDefaultSendAs (метод)"
original: "https://core.telegram.org/method/phone.saveDefaultSendAs"
section: ref
kind: method
layout: layout.njk
---

# phone.saveDefaultSendAs

*Метод из схемы TL.*

> Save the default peer displayed as the author of live story comments and reactions, see [in-call messages »](https://core.telegram.org/api/group-calls#in-call-messages).
> It cannot be used for normal video chats/livestreams, where in-call messages are sent as the peer used to join the call (`join_as`).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Live story group call |
| send_as | [InputPeer](/type/InputPeer/) | Peer to display as the author of subsequent comments and reactions |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
