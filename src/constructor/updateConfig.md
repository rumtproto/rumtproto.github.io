---
title: "updateConfig"
original: "https://core.telegram.org/constructor/updateConfig"
section: ref
kind: constructor
description: "Конфигурация на стороне сервера изменилась; клиенту следует заново запросить её с помощью help.getConfig и help.getAppConfig."
layout: layout.njk
---

# updateConfig

Конфигурация на стороне сервера изменилась; клиенту следует заново запросить её с помощью [help.getConfig](/method/help.getConfig/) и [help.getAppConfig](/method/help.getAppConfig/).

```
updateConfig#a229dd06 = Update;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [help.getConfig](/method/help.getConfig/)

Возвращает текущую конфигурацию, включая конфигурацию дата-центров.

#### [help.getAppConfig](/method/help.getAppConfig/)

Получить конфигурацию, специфичную для приложения; подробнее о результате см. [клиентскую конфигурацию](/api/config/#client-configuration).
