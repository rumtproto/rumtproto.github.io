---
title: "stories.canSendStoryCount"
original: "https://core.telegram.org/constructor/stories.canSendStoryCount"
section: ref
kind: constructor
description: "Содержит количество доступных слотов для активных историй (равно значению параметра клиентской конфигурации story_expiring_limit_* за вычетом числа активных на данный момент…"
layout: layout.njk
---

# stories.canSendStoryCount

Содержит количество доступных слотов для активных историй (равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) за вычетом числа активных на данный момент историй).

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count_remains</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Оставшееся число слотов для активных историй.</td></tr></tbody></table>

### Тип

[stories.CanSendStoryCount](/type/stories.CanSendStoryCount/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
