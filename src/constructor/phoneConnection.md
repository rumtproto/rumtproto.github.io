---
title: "phoneConnection (конструктор)"
original: "https://core.telegram.org/constructor/phoneConnection"
section: ref
kind: constructor
layout: layout.njk
---

# phoneConnection

*Конструктор из схемы TL.*

> DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call

## Определение TL

```
phoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| tcp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether TCP should be used |
| id | [long](/type/long/) | Endpoint ID |
| ip | [string](/type/string/) | IP address of endpoint |
| ipv6 | [string](/type/string/) | IPv6 address of endpoint |
| port | [int](/type/int/) | Port ID |
| peer_tag | [bytes](/type/bytes/) | Our peer tag |

## Тип

[PhoneConnection](/type/PhoneConnection/)
