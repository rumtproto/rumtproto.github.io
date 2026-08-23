---
title: "Poll (тип)"
original: "https://core.telegram.org/type/Poll"
section: ref
kind: type
layout: layout.njk
---

# Poll

*Тип из схемы TL.*

> Indicates a poll message

## Определение TL

```
poll#58747131 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [poll](/constructor/poll/) | Poll |
