---
title: "stories.allStories"
original: "https://core.telegram.org/constructor/stories.allStories"
section: ref
kind: constructor
description: "Полный список активных (или активных и скрытых) историй."
layout: layout.njk
---

# stories.allStories

Полный список активных (или активных и скрытых) [историй](/api/stories/#watching-stories).

```
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_more</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Можно ли получить больше результатов, как <a href="/api/stories#watching-stories">описано здесь »</a>.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число активных (или активных и скрытых) историй</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Состояние, используемое для постраничной выборки</td></tr><tr><td><strong>peer_stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PeerStories">PeerStories</a>&gt;</td><td>Истории</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>stealth_mode</strong></td><td style="text-align: center;"><a href="/type/StoriesStealthMode">StoriesStealthMode</a></td><td>Информация о текущем <a href="/api/stories#stealth-mode">скрытом режиме</a></td></tr></tbody></table>

### Тип

[stories.AllStories](/type/stories.AllStories/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
