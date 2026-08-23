---
title: "updateConfig (конструктор)"
original: "https://core.telegram.org/constructor/updateConfig"
section: ref
kind: constructor
layout: layout.njk
---

# updateConfig

*Конструктор из схемы TL.*

> The server-side configuration has changed; the client should re-fetch the config using [help.getConfig](/method/help.getConfig/) and [help.getAppConfig](/method/help.getAppConfig/).

## Определение TL

```
updateConfig#a229dd06 = Update;
```

## Параметры

This constructor does not require any parameters.

## Тип

[Update](/type/Update/)

## Related pages

#### [help.getConfig](/method/help.getConfig/)

Returns current configuration, including data center configuration.

#### [help.getAppConfig](/method/help.getAppConfig/)

Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result.
