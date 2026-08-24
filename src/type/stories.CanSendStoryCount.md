---
title: "stories.CanSendStoryCount"
original: "https://core.telegram.org/type/stories.CanSendStoryCount"
section: ref
kind: type
description: "Содержит количество доступных слотов для активных историй (равно значению параметра клиентской конфигурации story_expiring_limit_* за вычетом числа активных на данный момент…"
layout: layout.njk
---

# stories.CanSendStoryCount

Содержит количество доступных слотов для активных историй (равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) за вычетом числа активных на данный момент историй).

```
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;

---functions---

stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.canSendStoryCount">stories.canSendStoryCount</a></td><td>Содержит количество доступных слотов для активных историй (равно значению <a href="/api/config#story-expiring-limit-default">параметра клиентской конфигурации <code>story_expiring_limit_*</code></a> за вычетом числа активных на данный момент историй).</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.canSendStory">stories.canSendStory</a></td><td>Проверить, можем ли мы публиковать истории от имени указанного пира.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
