---
title: "cdnConfig"
original: "https://core.telegram.org/constructor/cdnConfig"
section: ref
kind: constructor
description: "Конфигурация для скачивания файлов через CDN."
layout: layout.njk
---

# cdnConfig

Конфигурация для скачивания файлов через [CDN](https://core.telegram.org/cdn).

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>public_keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/CdnPublicKey">CdnPublicKey</a>&gt;</td><td>Вектор открытых ключей, используемых <strong>только</strong> при рукопожатиях с дата-центрами <a href="/cdn">CDN</a>.</td></tr></tbody></table>

### Тип

[CdnConfig](/type/CdnConfig/)

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
