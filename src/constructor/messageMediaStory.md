---
title: "messageMediaStory"
original: "https://core.telegram.org/constructor/messageMediaStory"
section: ref
kind: constructor
description: "Представляет пересланную историю или упоминание истории."
layout: layout.njk
---

# messageMediaStory

Представляет пересланную [историю](/api/stories/) или упоминание истории.

```
messageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_mention</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что кто-то упомянул нас в этой истории (например, отметив нас в описании) или, наоборот, мы упомянули другого пира (если сообщение исходящее).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, опубликовавший историю.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/StoryItem">StoryItem</a></td><td>Сама история; если отсутствует, получите её с помощью <a href="/method/stories.getStoriesByID">stories.getStoriesByID</a> и указанных выше параметров <code>peer</code>/<code>id</code>.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Получить полные сведения о наборе [историй](/api/stories/) по их идентификаторам.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
