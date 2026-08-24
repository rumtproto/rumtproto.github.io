---
title: "updateBotMessageReaction"
original: "https://core.telegram.org/constructor/updateBotMessageReaction"
section: ref
kind: constructor
description: "Только для ботов: пользователь изменил свои реакции на сообщении с публичными реакциями."
layout: layout.njk
---

# updateBotMessageReaction

Только для ботов: пользователь изменил свои реакции на сообщении с публичными реакциями.

```
updateBotMessageReaction#ac21d3ce peer:Peer msg_id:int date:int actor:Peer old_reactions:Vector<Reaction> new_reactions:Vector<Reaction> qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир сообщения, на которое поставлена реакция.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, на которое поставлена реакция.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата изменения.</td></tr><tr><td><strong>actor</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пользователь, который поставил или снял реакцию на сообщение.</td></tr><tr><td><strong>old_reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>Прежние реакции</td></tr><tr><td><strong>new_reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>Новые реакции</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Идентификатор последовательности событий <a href="/api/updates">QTS</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
