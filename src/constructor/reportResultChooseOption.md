---
title: "reportResultChooseOption (конструктор)"
original: "https://core.telegram.org/constructor/reportResultChooseOption"
section: ref
kind: constructor
layout: layout.njk
---

# reportResultChooseOption

*Конструктор из схемы TL.*

> The user must choose one of the following options, and then [messages.report](/method/messages.report/) must be re-invoked, passing the option's `option` identifier to [messages.report](/method/messages.report/).`option`.

## Определение TL

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Title of the option popup |
| options | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageReportOption](/type/MessageReportOption/)> | Available options, rendered as menu entries. |

## Тип

[ReportResult](/type/ReportResult/)

## Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
