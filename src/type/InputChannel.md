---
title: "InputChannel (тип)"
original: "https://core.telegram.org/type/InputChannel"
section: ref
kind: type
layout: layout.njk
---

# InputChannel

*Тип из схемы TL.*

> Represents a channel

## Определение TL

```
inputChannelEmpty#ee8c1e86 = InputChannel;
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputChannelEmpty](/constructor/inputChannelEmpty/) | Represents the absence of a channel |
| [inputChannel](/constructor/inputChannel/) | Represents a channel |
| [inputChannelFromMessage](/constructor/inputChannelFromMessage/) | Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat. |
