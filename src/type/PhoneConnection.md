---
title: "PhoneConnection (тип)"
original: "https://core.telegram.org/type/PhoneConnection"
section: ref
kind: type
layout: layout.njk
---

# PhoneConnection

*Тип из схемы TL.*

> Phone call connection

## Определение TL

```
phoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;
phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phoneConnection](/constructor/phoneConnection/) | DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call |
| [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/) | WebRTC connection parameters for a [phone call](https://core.telegram.org/api/calls). |
