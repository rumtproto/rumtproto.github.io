---
title: "ForumTopic (тип)"
original: "https://core.telegram.org/type/ForumTopic"
section: ref
kind: type
layout: layout.njk
---

# ForumTopic

*Тип из схемы TL.*

> Contains information about a [forum topic](https://core.telegram.org/api/forum#forum-topics)

## Определение TL

```
forumTopicDeleted#23f109b id:int = ForumTopic;
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [forumTopicDeleted](/constructor/forumTopicDeleted/) | Represents a deleted [forum topic](https://core.telegram.org/api/forum#forum-topics). This constructor is returned in place of a [forumTopic](/constructor/forumTopic/) by [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted. |
| [forumTopic](/constructor/forumTopic/) | Represents a [forum topic](https://core.telegram.org/api/forum#forum-topics). |

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
