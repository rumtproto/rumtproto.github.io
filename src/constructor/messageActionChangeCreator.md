---
title: "messageActionChangeCreator"
original: "https://core.telegram.org/constructor/messageActionChangeCreator"
section: ref
kind: constructor
description: "Сервисное сообщение: отправляется в супергруппу, когда передача прав владения завершается после ухода прежнего владельца из группы » (через 7 дней после ухода прежнего владельца,…"
layout: layout.njk
---

# messageActionChangeCreator

Сервисное сообщение: отправляется в супергруппу, когда [передача прав владения завершается после ухода прежнего владельца из группы »](/api/channel/#leaving-groups-channels) (через 7 дней после ухода прежнего владельца, если он не вернулся), и означает, что права владения переданы новому владельцу.

Отправлено с идентификатора пользователя прежнего владельца.

```
messageActionChangeCreator#e188503b new_creator_id:long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>new_creator_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, ставшего новым владельцем группы или канала.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
