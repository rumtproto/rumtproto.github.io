---
title: "storyView"
original: "https://core.telegram.org/constructor/storyView"
section: ref
kind: constructor
description: "Сведения о датах просмотра и реакциях для истории"
layout: layout.njk
---

# storyView

Сведения о датах просмотра и реакциях для [истории](/api/stories/)

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td><a href="/api/block">Полностью заблокировали</a> ли мы этого пользователя, в том числе закрыв ему просмотр наших историй.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td><a href="/api/block">Заблокировали</a> ли мы этому пользователю просмотр наших историй.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, просмотревший историю</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пользователь просмотрел историю</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Reaction">Reaction</a></td><td>Если присутствует, содержит реакцию, оставленную пользователем на историю</td></tr></tbody></table>

### Тип

[StoryView](/type/StoryView/)

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
