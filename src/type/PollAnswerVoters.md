---
title: "PollAnswerVoters (тип)"
original: "https://core.telegram.org/type/PollAnswerVoters"
section: ref
kind: type
layout: layout.njk
---

# PollAnswerVoters

*Тип из схемы TL.*

> How users voted on a certain poll answer

## Определение TL

```
pollAnswerVoters#3b6ddad2 flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:int = PollAnswerVoters;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [pollAnswerVoters](/constructor/pollAnswerVoters/) | A poll answer, and how users voted on it |
