---
title: "cdnPublicKey (конструктор)"
original: "https://core.telegram.org/constructor/cdnPublicKey"
section: ref
kind: constructor
layout: layout.njk
---

# cdnPublicKey

*Конструктор из схемы TL.*

> Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs.

## Определение TL

```
cdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | [CDN DC](https://core.telegram.org/cdn) ID |
| public_key | [string](/type/string/) | RSA public key |

## Тип

[CdnPublicKey](/type/CdnPublicKey/)

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
