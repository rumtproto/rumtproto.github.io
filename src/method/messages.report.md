---
title: "messages.report (метод)"
original: "https://core.telegram.org/method/messages.report"
section: ref
kind: method
layout: layout.njk
---

# messages.report

*Метод из схемы TL.*

> Report a message in a chat for violation of telegram's Terms of Service

## Определение TL

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;
---functions---
messages.report#fc78af9b peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages to report |
| option | [bytes](/type/bytes/) | Menu option, intially empty |
| message | [string](/type/string/) | Comment for report moderation |

## Результат

[ReportResult](/type/ReportResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MESSAGE_REQUIRED | A non-empty list of IDs must be passed to id. |
| 400 | OPTION_INVALID | Invalid option selected. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
