---
title: "inputUserFromMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputUserFromMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputUserFromMessage

*Конструктор из схемы TL.*

> Defines a [min](https://core.telegram.org/api/min) user that was seen in a certain message of a certain chat.

## Определение TL

```
inputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat where the user was seen |
| msg_id | [int](/type/int/) | The message ID |
| user_id | [long](/type/long/) | The identifier of the user that was seen |

## Тип

[InputUser](/type/InputUser/)

## Related pages

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.
