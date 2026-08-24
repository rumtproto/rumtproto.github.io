---
title: "storyViewPublicForward"
original: "https://core.telegram.org/constructor/storyViewPublicForward"
section: ref
kind: constructor
description: "Определённый пир переслал историю в виде сообщения в публичный чат или канал."
layout: layout.njk
---

# storyViewPublicForward

Определённый пир переслал историю в виде сообщения в публичный чат или канал.

```
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td><a href="/api/block">Полностью заблокировали</a> ли мы этого пользователя, в том числе закрыв ему просмотр наших историй.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td><a href="/api/block">Заблокировали</a> ли мы этому пользователю просмотр наших историй.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Сообщение с пересланной историей.</td></tr></tbody></table>

### Тип

[StoryView](/type/StoryView/)

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.
