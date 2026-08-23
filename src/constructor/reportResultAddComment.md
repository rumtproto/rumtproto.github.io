---
title: "reportResultAddComment (конструктор)"
original: "https://core.telegram.org/constructor/reportResultAddComment"
section: ref
kind: constructor
layout: layout.njk
---

# reportResultAddComment

*Конструктор из схемы TL.*

> The user should enter an additional comment for the moderators, and then [messages.report](/method/messages.report/) must be re-invoked, passing the comment to [messages.report](/method/messages.report/).`message`.

## Определение TL

```
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| optional | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this step can be skipped by the user, passing an empty message to [messages.report](/method/messages.report/), or if a non-empty message is mandatory. |
| option | [bytes](/type/bytes/) | The [messages.report](/method/messages.report/) method must be re-invoked, passing this option to option |

## Тип

[ReportResult](/type/ReportResult/)

## Related pages

#### [messages.report](/method/messages.report/)

Report a message in a chat for violation of telegram's Terms of Service
