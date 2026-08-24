---
title: "phoneConnection"
original: "https://core.telegram.org/constructor/phoneConnection"
section: ref
kind: constructor
description: "УСТАРЕЛО (libtgvoip): обозначает адрес (endpoint), который может использоваться для соединения с другим пользователем во время звонка"
layout: layout.njk
---

# phoneConnection

УСТАРЕЛО (libtgvoip): обозначает адрес (endpoint), который может использоваться для соединения с другим пользователем во время звонка

```
phoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>tcp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли использовать TCP</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор адреса (endpoint)</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>IP-адрес адреса (endpoint)</td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес IPv6 адреса (endpoint)</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор порта</td></tr><tr><td><strong>peer_tag</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Наша метка пира</td></tr></tbody></table>

### Тип

[PhoneConnection](/type/PhoneConnection/)
