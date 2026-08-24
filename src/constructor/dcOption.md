---
title: "dcOption"
original: "https://core.telegram.org/constructor/dcOption"
section: ref
kind: constructor
description: "Дата-центр"
layout: layout.njk
---

# dcOption

Дата-центр

```
dcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>ipv6</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли указанный IP-адресом версии IPv6</td></tr><tr><td><strong>media_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли использовать этот DC только для <a href="/api/files">скачивания или загрузки файлов</a></td></tr><tr><td><strong>tcpo_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Поддерживает ли этот DC только подключение с <a href="/mtproto/mtproto-transports#transport-obfuscation">обфускацией транспорта</a></td></tr><tr><td><strong>cdn</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли это <a href="/cdn">CDN DC</a>.</td></tr><tr><td><strong>static</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, этот IP-адрес следует использовать при подключении через прокси</td></tr><tr><td><strong>this_port_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если установлено, клиенты обязаны подключаться только по указанному порту, не пробуя никакой другой порт.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>DC ID</td></tr><tr><td><strong>ip_address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>IP-адрес DC</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Порт</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/bytes">bytes</a></td><td>Если установлен флаг <code>tcpo_only</code>, указывает секрет, который следует использовать при подключении с <a href="/mtproto/mtproto-transports#transport-obfuscation">обфускацией транспорта</a></td></tr></tbody></table>

### Тип

[DcOption](/type/DcOption/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Транспорты MTProto](/mtproto/mtproto-transports/)

Список транспортных протоколов MTProto, применяемых для упаковки полезной нагрузки.

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
