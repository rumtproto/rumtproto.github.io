---
title: "stories.allStoriesNotModified"
original: "https://core.telegram.org/constructor/stories.allStoriesNotModified"
section: ref
kind: constructor
description: "Список активных (или активных и скрытых) историй не изменился."
layout: layout.njk
---

# stories.allStoriesNotModified

Список активных (или активных и скрытых) [историй](/api/stories/#watching-stories) не изменился.

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Состояние, используемое для запроса обновлений</td></tr><tr><td><strong>stealth_mode</strong></td><td style="text-align: center;"><a href="/type/StoriesStealthMode">StoriesStealthMode</a></td><td>Информация о текущем <a href="/api/stories#stealth-mode">скрытом режиме</a></td></tr></tbody></table>

### Тип

[stories.AllStories](/type/stories.AllStories/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
