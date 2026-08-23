---
title: "messages.saveDefaultSendAs (метод)"
original: "https://core.telegram.org/method/messages.saveDefaultSendAs"
section: ref
kind: method
layout: layout.njk
---

# messages.saveDefaultSendAs

*Метод из схемы TL.*

> Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Group |
| send_as | [InputPeer](/type/InputPeer/) | The default peer that should be used when sending messages to the group |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |
