---
title: "help.getAppConfig (метод)"
original: "https://core.telegram.org/method/help.getAppConfig"
section: ref
kind: method
layout: layout.njk
---

# help.getAppConfig

*Метод из схемы TL.*

> Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result.

## Определение TL

```
help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;
---functions---
help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[help.AppConfig](/type/help.AppConfig/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
