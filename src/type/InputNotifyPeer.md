---
title: "InputNotifyPeer"
original: "https://core.telegram.org/type/InputNotifyPeer"
section: ref
kind: type
description: "Объект описывает набор пользователей и/или групп, которые создают уведомления."
layout: layout.njk
---

# InputNotifyPeer

Объект описывает набор пользователей и/или групп, которые создают уведомления.

```
inputNotifyPeer#b8bc5b0c peer:InputPeer = InputNotifyPeer;
inputNotifyUsers#193b4417 = InputNotifyPeer;
inputNotifyChats#4a95e84e = InputNotifyPeer;
inputNotifyBroadcasts#b1db7c7e = InputNotifyPeer;
inputNotifyForumTopic#5c467992 peer:InputPeer top_msg_id:int = InputNotifyPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputNotifyPeer">inputNotifyPeer</a></td><td>Уведомления, создаваемые определённым пользователем или группой.</td></tr><tr><td><a href="/constructor/inputNotifyUsers">inputNotifyUsers</a></td><td>Уведомления, создаваемые всеми пользователями.</td></tr><tr><td><a href="/constructor/inputNotifyChats">inputNotifyChats</a></td><td>Уведомления, создаваемые всеми группами.</td></tr><tr><td><a href="/constructor/inputNotifyBroadcasts">inputNotifyBroadcasts</a></td><td>Все <a href="/api/channel">каналы</a></td></tr><tr><td><a href="/constructor/inputNotifyForumTopic">inputNotifyForumTopic</a></td><td>Уведомления, создаваемые <a href="/api/forum#forum-topics">темой</a> в <a href="/api/forum">форуме</a>.</td></tr></tbody></table>
