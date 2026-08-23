---
title: "messages.messageEditData (конструктор)"
original: "https://core.telegram.org/constructor/messages.messageEditData"
section: ref
kind: constructor
layout: layout.njk
---

# messages.messageEditData

*Конструктор из схемы TL.*

> Message edit data for media

## Определение TL

```
messages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| caption | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Media caption, if the specified media's caption can be edited |

## Тип

[messages.MessageEditData](/type/messages.MessageEditData/)
