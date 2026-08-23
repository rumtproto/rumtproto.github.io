---
title: "account.reportPeer (метод)"
original: "https://core.telegram.org/method/account.reportPeer"
section: ref
kind: method
layout: layout.njk
---

# account.reportPeer

*Метод из схемы TL.*

> Report a peer for violation of telegram's Terms of Service

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer to report |
| reason | [ReportReason](/type/ReportReason/) | The reason why this peer is being reported |
| message | [string](/type/string/) | Comment for report moderation |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
