---
title: "inputPeerChannelFromMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputPeerChannelFromMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputPeerChannelFromMessage

*Конструктор из схемы TL.*

> Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat.

## Определение TL

```
inputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat where the channel's message was seen |
| msg_id | [int](/type/int/) | The message ID |
| channel_id | [long](/type/long/) | The identifier of the channel that was seen |

## Тип

[InputPeer](/type/InputPeer/)

## Related pages

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.
