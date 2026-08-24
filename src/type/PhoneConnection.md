---
title: "PhoneConnection"
original: "https://core.telegram.org/type/PhoneConnection"
section: ref
kind: type
description: "Соединение телефонного звонка"
layout: layout.njk
---

# PhoneConnection

Соединение телефонного звонка

```
phoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;
phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phoneConnection">phoneConnection</a></td><td>УСТАРЕЛО (libtgvoip): обозначает адрес (endpoint), который может использоваться для соединения с другим пользователем во время звонка</td></tr><tr><td><a href="/constructor/phoneConnectionWebrtc">phoneConnectionWebrtc</a></td><td>Параметры WebRTC-соединения для <a href="/api/calls">звонка</a>.</td></tr></tbody></table>
