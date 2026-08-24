---
title: "NotifyPeer"
original: "https://core.telegram.org/type/NotifyPeer"
section: ref
kind: type
description: "Объект описывает набор пользователей и/или групп, которые создают уведомления."
layout: layout.njk
---

# NotifyPeer

Объект описывает набор пользователей и/или групп, которые создают уведомления.

```
notifyPeer#9fd40bd8 peer:Peer = NotifyPeer;
notifyUsers#b4c83b4c = NotifyPeer;
notifyChats#c007cec3 = NotifyPeer;
notifyBroadcasts#d612e8ef = NotifyPeer;
notifyForumTopic#226e6308 peer:Peer top_msg_id:int = NotifyPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/notifyPeer">notifyPeer</a></td><td>Уведомления, создаваемые определённым пользователем или группой.</td></tr><tr><td><a href="/constructor/notifyUsers">notifyUsers</a></td><td>Уведомления, создаваемые всеми пользователями.</td></tr><tr><td><a href="/constructor/notifyChats">notifyChats</a></td><td>Уведомления, создаваемые всеми группами.</td></tr><tr><td><a href="/constructor/notifyBroadcasts">notifyBroadcasts</a></td><td>Настройки уведомлений канала</td></tr><tr><td><a href="/constructor/notifyForumTopic">notifyForumTopic</a></td><td>Уведомления, создаваемые <a href="/api/forum#forum-topics">темой</a> в <a href="/api/forum">форуме</a>.</td></tr></tbody></table>
