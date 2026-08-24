---
title: "messages.AffectedMessages"
original: "https://core.telegram.org/type/messages.AffectedMessages"
section: ref
kind: type
description: "Сообщения, затронутые изменениями"
layout: layout.njk
---

# Messages.AffectedMessages

Сообщения, затронутые изменениями

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;

---functions---

messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
messages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;

channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedMessages">messages.affectedMessages</a></td><td>События, затронутые операцией</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.readHistory">messages.readHistory</a></td><td>Отмечает историю сообщений как прочитанную.</td></tr><tr><td><a href="/method/messages.deleteMessages">messages.deleteMessages</a></td><td>Удаляет сообщения по их идентификаторам.</td></tr><tr><td><a href="/method/messages.readMessageContents">messages.readMessageContents</a></td><td>Уведомляет отправителя о том, что получатель прослушал голосовое сообщение или посмотрел видео, порождая <a href="/constructor/updateReadMessagesContents">updateReadMessagesContents</a>.</td></tr><tr><td><a href="/method/channels.deleteMessages">channels.deleteMessages</a></td><td>Удалить сообщения в <a href="/api/channel">канале/супергруппе</a></td></tr></tbody></table>
