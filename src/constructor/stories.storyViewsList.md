---
title: "stories.storyViewsList"
original: "https://core.telegram.org/constructor/stories.storyViewsList"
section: ref
kind: constructor
description: "Счётчики реакций и просмотров истории"
layout: layout.njk
---

# stories.storyViewsList

Счётчики реакций и просмотров [истории](/api/stories/)

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов, которые можно получить</td></tr><tr><td><strong>views_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число просмотров истории</td></tr><tr><td><strong>forwards_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число пересылок и репостов истории</td></tr><tr><td><strong>reactions_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество реакций, которые были добавлены к истории</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StoryView">StoryView</a>&gt;</td><td>Сведения о дате просмотра истории и о реакции</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для постраничной выборки</td></tr></tbody></table>

### Тип

[stories.StoryViewsList](/type/stories.StoryViewsList/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
