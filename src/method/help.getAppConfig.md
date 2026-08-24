---
title: "help.getAppConfig"
original: "https://core.telegram.org/method/help.getAppConfig"
section: ref
kind: method
description: "Получить конфигурацию, специфичную для приложения; подробнее о результате см. клиентскую конфигурацию."
layout: layout.njk
---

# help.getAppConfig

Получить конфигурацию, специфичную для приложения; подробнее о результате см. [клиентскую конфигурацию](/api/config/#client-configuration).

```
help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;
---functions---
help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[help.AppConfig](/type/help.AppConfig/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
