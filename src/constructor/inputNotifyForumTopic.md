---
title: "inputNotifyForumTopic"
original: "https://core.telegram.org/constructor/inputNotifyForumTopic"
section: ref
kind: constructor
description: "Уведомления, создаваемые темой в форуме."
layout: layout.njk
---

# inputNotifyForumTopic

Уведомления, создаваемые [темой](/api/forum/#forum-topics) в [форуме](/api/forum/).

```
inputNotifyForumTopic#5c467992 peer:InputPeer top_msg_id:int = InputNotifyPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Идентификатор форума</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/forum#forum-topics">Идентификатор темы</a></td></tr></tbody></table>

### Тип

[InputNotifyPeer](/type/InputNotifyPeer/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
