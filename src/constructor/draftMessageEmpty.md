---
title: "draftMessageEmpty (конструктор)"
original: "https://core.telegram.org/constructor/draftMessageEmpty"
section: ref
kind: constructor
layout: layout.njk
---

# draftMessageEmpty

*Конструктор из схемы TL.*

> Empty draft

## Определение TL

```
draftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | When was the draft last updated |

## Тип

[DraftMessage](/type/DraftMessage/)
