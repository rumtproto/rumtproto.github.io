---
title: "CdnPublicKey (тип)"
original: "https://core.telegram.org/type/CdnPublicKey"
section: ref
kind: type
layout: layout.njk
---

# CdnPublicKey

*Тип из схемы TL.*

> Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs.

## Определение TL

```
cdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [cdnPublicKey](/constructor/cdnPublicKey/) | Public key to use only during handshakes to [CDN](https://core.telegram.org/cdn) DCs. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
