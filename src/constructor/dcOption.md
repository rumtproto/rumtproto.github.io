---
title: "dcOption (конструктор)"
original: "https://core.telegram.org/constructor/dcOption"
section: ref
kind: constructor
layout: layout.njk
---

# dcOption

*Конструктор из схемы TL.*

> Data center

## Определение TL

```
dcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| ipv6 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the specified IP is an IPv6 address |
| media_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this DC should only be used to [download or upload files](/api/files/) |
| tcpo_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this DC only supports connection with [transport obfuscation](https://core.telegram.org/mtproto/mtproto-transports/#transport-obfuscation) |
| cdn | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a [CDN DC](https://core.telegram.org/cdn). |
| static | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, this IP should be used when connecting through a proxy |
| this_port_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, clients must connect using only the specified port, without trying any other port. |
| id | [int](/type/int/) | DC ID |
| ip_address | [string](/type/string/) | IP address of DC |
| port | [int](/type/int/) | Port |
| secret | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[bytes](/type/bytes/) | If the tcpo_only flag is set, specifies the secret to use when connecting using [transport obfuscation](https://core.telegram.org/mtproto/mtproto-transports/#transport-obfuscation) |

## Тип

[DcOption](/type/DcOption/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [MTProto transports](/mtproto/mtproto-transports/)

The list of MTProto transport protocols used to wrap payloads.

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
