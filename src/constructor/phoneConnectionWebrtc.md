---
title: "phoneConnectionWebrtc (конструктор)"
original: "https://core.telegram.org/constructor/phoneConnectionWebrtc"
section: ref
kind: constructor
layout: layout.njk
---

# phoneConnectionWebrtc

*Конструктор из схемы TL.*

> WebRTC connection parameters for a [phone call](https://core.telegram.org/api/calls).

## Определение TL

```
phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| turn | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a TURN endpoint |
| stun | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is a STUN endpoint |
| id | [long](/type/long/) | Endpoint ID |
| ip | [string](/type/string/) | IP address |
| ipv6 | [string](/type/string/) | IPv6 address |
| port | [int](/type/int/) | Port |
| username | [string](/type/string/) | Username |
| password | [string](/type/string/) | Password |

## Тип

[PhoneConnection](/type/PhoneConnection/)

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
