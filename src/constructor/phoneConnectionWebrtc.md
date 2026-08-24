---
title: "phoneConnectionWebrtc"
original: "https://core.telegram.org/constructor/phoneConnectionWebrtc"
section: ref
kind: constructor
description: "Параметры WebRTC-соединения для звонка."
layout: layout.njk
---

# phoneConnectionWebrtc

Параметры WebRTC-соединения для [звонка](/api/calls/).

```
phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>turn</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли это адресом TURN</td></tr><tr><td><strong>stun</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это адресом STUN</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор адреса (endpoint)</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>IP-адрес</td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес IPv6</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Порт</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Пароль</td></tr></tbody></table>

### Тип

[PhoneConnection](/type/PhoneConnection/)

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
