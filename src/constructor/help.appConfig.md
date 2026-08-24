---
title: "help.appConfig"
original: "https://core.telegram.org/constructor/help.appConfig"
section: ref
kind: constructor
description: "Содержит различные параметры клиентской конфигурации"
layout: layout.njk
---

# help.appConfig

Содержит различные [параметры клиентской конфигурации](/api/config/#client-configuration)

```
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>config</strong></td><td style="text-align: center;"><a href="/type/JSONValue">JSONValue</a></td><td><a href="/api/config#client-configuration">Параметры конфигурации клиента</a></td></tr></tbody></table>

### Тип

[help.AppConfig](/type/help.AppConfig/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
