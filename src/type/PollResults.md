---
title: "PollResults (тип)"
original: "https://core.telegram.org/type/PollResults"
section: ref
kind: type
layout: layout.njk
---

# PollResults

*Тип из схемы TL.*

> Results of poll

## Определение TL

```
pollResults#7adf2420 flags:# min:flags.0?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> = PollResults;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [pollResults](/constructor/pollResults/) | Results of poll |
