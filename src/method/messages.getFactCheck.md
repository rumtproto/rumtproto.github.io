---
title: "messages.getFactCheck (метод)"
original: "https://core.telegram.org/method/messages.getFactCheck"
section: ref
kind: method
layout: layout.njk
---

# messages.getFactCheck

*Метод из схемы TL.*

> Fetch one or more [factchecks, see here »](https://core.telegram.org/api/factcheck) for the full flow.

## Определение TL

```
---functions---
messages.getFactCheck#b9cdc5ee peer:InputPeer msg_id:Vector<int> = Vector<FactCheck>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the messages were sent. |
| msg_id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Messages that have associated [factCheck](/constructor/factCheck/) constructors with the need_check flag set. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FactCheck](/type/FactCheck/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [factCheck](/constructor/factCheck/)

Represents a [fact-check »](https://core.telegram.org/api/factcheck) created by an independent fact-checker.

#### [Fact checks](https://core.telegram.org/api/factcheck)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
