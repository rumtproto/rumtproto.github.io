---
title: "channels.SendAsPeers"
original: "https://core.telegram.org/type/channels.SendAsPeers"
section: ref
kind: type
description: "Список пиров, от имени которых можно отправлять сообщения в определённой группе"
layout: layout.njk
---

# channels.SendAsPeers

Список пиров, от имени которых можно отправлять сообщения в определённой группе

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;

---functions---

channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channels.sendAsPeers">channels.sendAsPeers</a></td><td>Список пиров, от имени которых можно отправлять сообщения в определённой группе</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.getSendAs">channels.getSendAs</a></td><td>Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом <code>for_live_stories</code> возвращает пиров, которые могут быть авторами <a href="/api/group-calls#in-call-messages">сообщений во время прямого эфира истории »</a>.</td></tr></tbody></table>
