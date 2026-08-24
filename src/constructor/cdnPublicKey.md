---
title: "cdnPublicKey"
original: "https://core.telegram.org/constructor/cdnPublicKey"
section: ref
kind: constructor
description: "Открытый ключ, используемый **только** при рукопожатиях с дата-центрами CDN."
layout: layout.njk
---

# cdnPublicKey

Открытый ключ, используемый **только** при рукопожатиях с дата-центрами [CDN](https://core.telegram.org/cdn).

```
cdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/cdn">CDN DC</a></td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Открытый ключ RSA</td></tr></tbody></table>

### Тип

[CdnPublicKey](/type/CdnPublicKey/)

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
