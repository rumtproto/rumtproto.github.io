---
title: "stories.getAllStories"
original: "https://core.telegram.org/method/stories.getAllStories"
section: ref
kind: method
description: "Получить список активных (или активных и скрытых) историй; подробнее о просмотре историй см. здесь »."
layout: layout.njk
---

# stories.getAllStories

Получить список активных (или активных и скрытых) историй; подробнее о просмотре историй см. [здесь »](/api/stories/#watching-stories).

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;
---functions---
stories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>next</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если заданы оба поля <code>next</code> и <code>state</code>, переданное значение <code>state</code> используется для перехода к следующей странице результатов; если не заданы ни <code>state</code>, ни <code>next</code>, загружается первая страница; если <code>state</code> задано, а <code>next</code> — нет, выполняется проверка изменений в наборе активных/скрытых пиров; подробнее о полном порядке действий см. <a href="/api/stories#watching-stories">здесь »</a>.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, получает скрытый список активных историй, иначе получает список активных историй; подробнее о полном порядке действий см. <a href="/api/stories#watching-stories">здесь »</a>.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если заданы оба поля <code>next</code> и <code>state</code>, переданное значение <code>state</code> используется для перехода к следующей странице результатов; если не заданы ни <code>state</code>, ни <code>next</code>, загружается первая страница; если <code>state</code> задано, а <code>next</code> — нет, выполняется проверка изменений в наборе активных/скрытых пиров; подробнее о полном порядке действий см. <a href="/api/stories#watching-stories">здесь »</a>.</td></tr></tbody></table>

### Результат

[stories.AllStories](/type/stories.AllStories/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
