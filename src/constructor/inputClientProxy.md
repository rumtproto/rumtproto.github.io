---
title: "inputClientProxy (конструктор)"
original: "https://core.telegram.org/constructor/inputClientProxy"
section: ref
kind: constructor
layout: layout.njk
---

# inputClientProxy

*Конструктор из схемы TL.*

> Info about an [MTProxy](https://core.telegram.org/mtproto/mtproto-transports/#transport-obfuscation) used to connect.

## Определение TL

```
inputClientProxy#75588b3f address:string port:int = InputClientProxy;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| address | [string](/type/string/) | Proxy address |
| port | [int](/type/int/) | Proxy port |

## Тип

[InputClientProxy](/type/InputClientProxy/)

## Related pages

#### [MTProto transports](/mtproto/mtproto-transports/)

The list of MTProto transport protocols used to wrap payloads.
