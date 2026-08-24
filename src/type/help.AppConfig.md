---
title: "help.AppConfig"
original: "https://core.telegram.org/type/help.AppConfig"
section: ref
kind: type
description: "Содержит различные параметры клиентской конфигурации"
layout: layout.njk
---

# help.AppConfig

Содержит различные [параметры клиентской конфигурации](/api/config/#client-configuration)

```
help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;

---functions---

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.appConfigNotModified">help.appConfigNotModified</a></td><td>Параметры конфигурации клиента не изменились</td></tr><tr><td><a href="/constructor/help.appConfig">help.appConfig</a></td><td>Содержит различные <a href="/api/config#client-configuration">параметры клиентской конфигурации</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getAppConfig">help.getAppConfig</a></td><td>Получить конфигурацию, специфичную для приложения; подробнее о результате см. <a href="/api/config#client-configuration">конфигурация клиента</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
