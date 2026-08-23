---
title: "inputChannelFromMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputChannelFromMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputChannelFromMessage

*Конструктор из схемы TL.*

> Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat.

## Определение TL

```
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat where the channel was seen |
| msg_id | [int](/type/int/) | The message ID in the chat where the channel was seen |
| channel_id | [long](/type/long/) | The channel ID |

## Тип

[InputChannel](/type/InputChannel/)

## Related pages

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.
