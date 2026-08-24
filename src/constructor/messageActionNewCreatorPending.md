---
title: "messageActionNewCreatorPending"
original: "https://core.telegram.org/constructor/messageActionNewCreatorPending"
section: ref
kind: constructor
description: "Сервисное сообщение: отправляется в супергруппу, когда создатель группы или канала покидает группу », и означает, что передача прав владения ожидает завершения. Пользователь…"
layout: layout.njk
---

# messageActionNewCreatorPending

Сервисное сообщение: отправляется в супергруппу, когда [создатель группы или канала покидает группу »](/api/channel/#leaving-groups-channels), и означает, что передача прав владения ожидает завершения. Пользователь `new_creator_id` станет новым владельцем через 7 дней, если прежний владелец не вернётся.

Отправлено с идентификатора пользователя прежнего владельца.

```
messageActionNewCreatorPending#b07ed085 new_creator_id:long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>new_creator_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, который станет новым владельцем группы или канала через 7 дней, если прежний владелец не вернётся.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
