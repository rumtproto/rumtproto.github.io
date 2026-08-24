---
title: "notifyForumTopic"
original: "https://core.telegram.org/constructor/notifyForumTopic"
section: ref
kind: constructor
description: "Уведомления, создаваемые темой в форуме."
layout: layout.njk
---

# notifyForumTopic

Уведомления, создаваемые [темой](/api/forum/#forum-topics) в [форуме](/api/forum/).

```
notifyForumTopic#226e6308 peer:Peer top_msg_id:int = NotifyPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Идентификатор форума</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/forum#forum-topics">Идентификатор темы</a></td></tr></tbody></table>

### Тип

[NotifyPeer](/type/NotifyPeer/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
