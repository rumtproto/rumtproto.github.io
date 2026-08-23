---
title: "help.appConfig (конструктор)"
original: "https://core.telegram.org/constructor/help.appConfig"
section: ref
kind: constructor
layout: layout.njk
---

# help.appConfig

*Конструктор из схемы TL.*

> Contains various [client configuration parameters](https://core.telegram.org/api/config#client-configuration)

## Определение TL

```
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| config | [JSONValue](/type/JSONValue/) | [Client configuration parameters](https://core.telegram.org/api/config#client-configuration) |

## Тип

[help.AppConfig](/type/help.AppConfig/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
