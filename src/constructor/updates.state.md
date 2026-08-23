---
title: "updates.state (конструктор)"
original: "https://core.telegram.org/constructor/updates.state"
section: ref
kind: constructor
layout: layout.njk
---

# updates.state

*Конструктор из схемы TL.*

> Updates state.

## Определение TL

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pts | [int](/type/int/) | Number of events occurred in a text box |
| qts | [int](/type/int/) | Position in a sequence of updates in secret chats. For further details refer to article [secret chats](/api/end-to-end/) |
| date | [int](/type/int/) | Date of condition |
| seq | [int](/type/int/) | Number of sent updates |
| unread_count | [int](/type/int/) | Number of unread messages |

## Тип

[updates.State](/type/updates.State/)

## Related pages

#### [End-to-End Encryption, Secret Chats](/api/end-to-end/)

New feature for end-to-end-encrypted messaging.
