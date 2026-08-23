---
title: "account.reportProfilePhoto (метод)"
original: "https://core.telegram.org/method/account.reportProfilePhoto"
section: ref
kind: method
layout: layout.njk
---

# account.reportProfilePhoto

*Метод из схемы TL.*

> Report a profile photo of a dialog

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reportProfilePhoto#fa8cc6f5 peer:InputPeer photo_id:InputPhoto reason:ReportReason message:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The dialog |
| photo_id | [InputPhoto](/type/InputPhoto/) | Dialog photo ID |
| reason | [ReportReason](/type/ReportReason/) | Report reason |
| message | [string](/type/string/) | Comment for report moderation |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
