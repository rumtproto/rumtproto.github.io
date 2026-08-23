---
title: "help.AppConfig (тип)"
original: "https://core.telegram.org/type/help.AppConfig"
section: ref
kind: type
layout: layout.njk
---

# help.AppConfig

*Тип из схемы TL.*

> Contains various [client configuration parameters](https://core.telegram.org/api/config#client-configuration)

## Определение TL

```
help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;

---functions---

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.appConfigNotModified](/constructor/help.appConfigNotModified/) | The client configuration parameters haven't changed |
| [help.appConfig](/constructor/help.appConfig/) | Contains various [client configuration parameters](https://core.telegram.org/api/config#client-configuration) |

## Методы

| Method | Описание |
|---|---|
| [help.getAppConfig](/method/help.getAppConfig/) | Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
