---
title: "messageMediaPoll (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaPoll"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaPoll

*Конструктор из схемы TL.*

> Poll

## Определение TL

```
messageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| poll | [Poll](/type/Poll/) | The poll |
| results | [PollResults](/type/PollResults/) | The results of the poll |
| attached_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[MessageMedia](/type/MessageMedia/) | Optional media attachment displayed alongside the poll |

## Тип

[MessageMedia](/type/MessageMedia/)
