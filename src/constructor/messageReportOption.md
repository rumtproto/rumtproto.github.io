---
title: "messageReportOption (конструктор)"
original: "https://core.telegram.org/constructor/messageReportOption"
section: ref
kind: constructor
layout: layout.njk
---

# messageReportOption

*Конструктор из схемы TL.*

> Report menu option

## Определение TL

```
messageReportOption#7903e3d9 text:string option:bytes = MessageReportOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Option title |
| option | [bytes](/type/bytes/) | Option identifier: if the user selects this option, re-invoke [messages.report](/method/messages.report/), passing this option to option |

## Тип

[MessageReportOption](/type/MessageReportOption/)

## Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
