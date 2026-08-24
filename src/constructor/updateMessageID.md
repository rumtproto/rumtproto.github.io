---
title: "updateMessageID"
original: "https://core.telegram.org/constructor/updateMessageID"
section: ref
kind: constructor
description: "Отправленному сообщению с клиентским идентификатором **random\\_id** был присвоен идентификатор."
layout: layout.njk
---

# updateMessageID

Отправленному сообщению с клиентским идентификатором **random\_id** был присвоен идентификатор.

```
updateMessageID#4e90bfd6 id:int random_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <strong>id</strong> соответствующего сообщения <a href="/type/Message">Message</a></td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Ранее переданный клиентом идентификатор <strong>random_id</strong>. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Message](/type/Message/)

Объект, описывающий сообщение.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
