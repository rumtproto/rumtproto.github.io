---
title: "updateBotMessageReactions"
original: "https://core.telegram.org/constructor/updateBotMessageReactions"
section: ref
kind: constructor
description: "Только для ботов: изменилось число реакций на сообщении с анонимными реакциями."
layout: layout.njk
---

# updateBotMessageReactions

Только для ботов: изменилось число реакций на сообщении с анонимными реакциями.

```
updateBotMessageReactions#9cb7759 peer:Peer msg_id:int date:int reactions:Vector<ReactionCount> qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир сообщения, на которое поставлена реакция.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, на которое поставлена реакция.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата изменения.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ReactionCount">ReactionCount</a>&gt;</td><td>Новые счётчики реакций.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Идентификатор последовательности событий <a href="/api/updates">QTS</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
