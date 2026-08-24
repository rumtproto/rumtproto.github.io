---
title: "ForumTopic"
original: "https://core.telegram.org/type/ForumTopic"
section: ref
kind: type
description: "Содержит информацию о теме форума"
layout: layout.njk
---

# ForumTopic

Содержит информацию о [теме форума](/api/forum/#forum-topics)

```
forumTopicDeleted#23f109b id:int = ForumTopic;
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/forumTopicDeleted">forumTopicDeleted</a></td><td>Представляет удалённую <a href="/api/forum#forum-topics">тему форума</a>.<br><br>Этот конструктор возвращается вместо <a href="/constructor/forumTopic">forumTopic</a> методом <a href="/method/messages.getForumTopicsByID">messages.getForumTopicsByID</a> (и другими методами получения тем), когда тема больше не существует, что позволяет клиентам и ботам убедиться, что тема была удалена.</td></tr><tr><td><a href="/constructor/forumTopic">forumTopic</a></td><td>Представляет <a href="/api/forum#forum-topics">тему форума</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
