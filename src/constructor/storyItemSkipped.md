---
title: "storyItemSkipped"
original: "https://core.telegram.org/constructor/storyItemSkipped"
section: ref
kind: constructor
description: "Представляет активную историю, полная информация о которой опущена из соображений экономии места и производительности; используйте stories.getStoriesByID, чтобы при необходимости…"
layout: layout.njk
---

# storyItemSkipped

Представляет активную историю, полная информация о которой опущена из соображений экономии места и производительности; используйте [stories.getStoriesByID](/method/stories.getStoriesByID/), чтобы при необходимости получить полные сведения о пропущенной истории.

```
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>close_friends</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Могут ли эту историю видеть только <a href="/api/privacy">наши близкие друзья, подробнее см. здесь »</a></td></tr><tr><td><strong>live</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Является ли эта история <a href="/api/stories">прямой видеотрансляцией »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда история была опубликована.</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда истекает срок действия истории.</td></tr></tbody></table>

### Тип

[StoryItem](/type/StoryItem/)

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Получить полные сведения о наборе [историй](/api/stories/) по их идентификаторам.
