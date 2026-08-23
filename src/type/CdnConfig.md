---
title: "CdnConfig (тип)"
original: "https://core.telegram.org/type/CdnConfig"
section: ref
kind: type
layout: layout.njk
---

# CdnConfig

*Тип из схемы TL.*

> Configuration for [CDN](https://core.telegram.org/cdn) file downloads.

## Определение TL

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;

---functions---

help.getCdnConfig#52029342 = CdnConfig;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [cdnConfig](/constructor/cdnConfig/) | Configuration for [CDN](https://core.telegram.org/cdn) file downloads. |

## Методы

| Method | Описание |
|---|---|
| [help.getCdnConfig](/method/help.getCdnConfig/) | Get configuration for [CDN](https://core.telegram.org/cdn) file downloads. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
