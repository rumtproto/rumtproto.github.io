---
title: "inputMediaPoll (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaPoll"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaPoll

*Конструктор из схемы TL.*

> A poll

## Определение TL

```
inputMediaPoll#f94e5f1 flags:# poll:Poll correct_answers:flags.0?Vector<bytes> solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| poll | [Poll](/type/Poll/) | The poll to send |
| correct_answers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 0-based indices of the correct answers in the answers vector (for quiz polls) |
| attached_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputMedia](/type/InputMedia/) | Optional media attachment to display alongside the poll |
| solution | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds. |
| solution_entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Styled text message entities](https://core.telegram.org/api/entities) for the solution explanation. |
| solution_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputMedia](/type/InputMedia/) | Optional media attachment shown alongside the quiz solution explanation |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
