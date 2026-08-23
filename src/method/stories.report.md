---
title: "stories.report (метод)"
original: "https://core.telegram.org/method/stories.report"
section: ref
kind: method
layout: layout.njk
---

# stories.report

*Метод из схемы TL.*

> Report a story.

## Определение TL

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;
---functions---
stories.report#19d8eb45 peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer that uploaded the story. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the stories to report. |
| option | [bytes](/type/bytes/) | Menu option, intially empty |
| message | [string](/type/string/) | Comment for report moderation |

## Результат

[ReportResult](/type/ReportResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
