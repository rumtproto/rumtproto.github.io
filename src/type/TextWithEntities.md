---
title: "TextWithEntities (тип)"
original: "https://core.telegram.org/type/TextWithEntities"
section: ref
kind: type
layout: layout.njk
---

# TextWithEntities

*Тип из схемы TL.*

> Styled text with [message entities](https://core.telegram.org/api/entities)
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===216===
> textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
> ```
> API schema:

## Определение TL

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

---functions---

messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [textWithEntities](/constructor/textWithEntities/) | Styled text with [message entities](https://core.telegram.org/api/entities) |

## Методы

| Method | Описание |
|---|---|
| [messages.summarizeText](/method/messages.summarizeText/) | Summarize the contents of a message with AI, see [here »](https://core.telegram.org/api/ai#summarize-messages) for more info. Clients should use [message](/constructor/message/).summary_from_language as a hint for showing a summarization button; its absence does not forbid invoking this method. |

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
