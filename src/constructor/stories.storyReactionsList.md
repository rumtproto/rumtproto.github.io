---
title: "stories.storyReactionsList"
original: "https://core.telegram.org/constructor/stories.storyReactionsList"
section: ref
kind: constructor
description: "Список пиров, отреагировавших на конкретную историю или иначе взаимодействовавших с ней"
layout: layout.njk
---

# stories.storyReactionsList

Список пиров, отреагировавших на конкретную [историю](/api/stories/) или иначе взаимодействовавших с ней

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число реакций, соответствующих запросу</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StoryReaction">StoryReaction</a>&gt;</td><td>Список пиров, отреагировавших на конкретную историю или иначе взаимодействовавших с ней</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Если установлено, указывает следующее смещение, которое следует использовать для загрузки дополнительных результатов вызовом <a href="/method/stories.getStoryReactionsList">stories.getStoryReactionsList</a>.</td></tr></tbody></table>

### Тип

[stories.StoryReactionsList](/type/stories.StoryReactionsList/)

### Связанные страницы

#### [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/)

Получить список [реакций](/api/reactions/) и взаимодействий с [историей](/api/stories/), опубликованной в канале, вместе с отправителем каждой реакции.

Может использоваться только администраторами канала.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
