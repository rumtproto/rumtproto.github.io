---
title: "PollAnswer (тип)"
original: "https://core.telegram.org/type/PollAnswer"
section: ref
kind: type
layout: layout.njk
---

# PollAnswer

*Тип из схемы TL.*

> Indicates a possible answer to a [poll](/type/Poll/).

## Определение TL

```
pollAnswer#ff16e2ca text:TextWithEntities option:bytes = PollAnswer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [pollAnswer](/constructor/pollAnswer/) | A possible answer of a poll |
| [inputPollAnswer](https://core.telegram.org/constructor/inputPollAnswer) | An answer option to add to an [open-answer poll »](https://core.telegram.org/api/poll#open-answer-polls) |

## Related pages

#### [Poll](/type/Poll/)

Indicates a poll message
