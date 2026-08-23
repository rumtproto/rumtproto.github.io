---
title: "cdnConfig (конструктор)"
original: "https://core.telegram.org/constructor/cdnConfig"
section: ref
kind: constructor
layout: layout.njk
---

# cdnConfig

*Конструктор из схемы TL.*

> Configuration for [CDN](https://core.telegram.org/cdn) file downloads.

## Определение TL

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| public_keys | [Vector](https://core.telegram.org/type/Vector%20t)<[CdnPublicKey](/type/CdnPublicKey/)> | Vector of public keys to use only during handshakes to [CDN](https://core.telegram.org/cdn) DCs. |

## Тип

[CdnConfig](/type/CdnConfig/)

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
