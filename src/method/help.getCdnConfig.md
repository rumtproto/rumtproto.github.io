---
title: "help.getCdnConfig (метод)"
original: "https://core.telegram.org/method/help.getCdnConfig"
section: ref
kind: method
layout: layout.njk
---

# help.getCdnConfig

*Метод из схемы TL.*

> Get configuration for [CDN](https://core.telegram.org/cdn) file downloads.

## Определение TL

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;
---functions---
help.getCdnConfig#52029342 = CdnConfig;
```

## Параметры

This constructor does not require any parameters.

## Результат

[CdnConfig](/type/CdnConfig/)

## Both users and bots can use this method

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
