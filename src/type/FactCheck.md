---
title: "FactCheck (тип)"
original: "https://core.telegram.org/type/FactCheck"
section: ref
kind: type
layout: layout.njk
---

# FactCheck

*Тип из схемы TL.*

> Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker.

## Определение TL

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [factCheck](/constructor/factCheck/) | Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker. |

## Related pages

#### [Fact checks](https://core.telegram.org/api/factcheck)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
