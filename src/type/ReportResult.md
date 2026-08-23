---
title: "ReportResult (тип)"
original: "https://core.telegram.org/type/ReportResult"
section: ref
kind: type
layout: layout.njk
---

# ReportResult

*Тип из схемы TL.*

> Represents a report menu or result

## Определение TL

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;

---functions---

messages.report#fc78af9b peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;

stories.report#19d8eb45 peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [reportResultChooseOption](/constructor/reportResultChooseOption/) | The user must choose one of the following options, and then [messages.report](/method/messages.report/) must be re-invoked, passing the option's option identifier to [messages.report](/method/messages.report/).option. |
| [reportResultAddComment](/constructor/reportResultAddComment/) | The user should enter an additional comment for the moderators, and then [messages.report](/method/messages.report/) must be re-invoked, passing the comment to [messages.report](/method/messages.report/).message. |
| [reportResultReported](/constructor/reportResultReported/) | The report was sent successfully, no further actions are required. |

## Методы

| Method | Описание |
|---|---|
| [messages.report](/method/messages.report/) | Report a message in a chat for violation of telegram's Terms of Service |
| [stories.report](/method/stories.report/) | Report a story. |
