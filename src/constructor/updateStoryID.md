---
title: "updateStoryID"
original: "https://core.telegram.org/constructor/updateStoryID"
section: ref
kind: constructor
description: "История успешно загружена."
layout: layout.njk
---

# updateStoryID

История успешно загружена.

[@term:random_id] После успешной загрузки истории будет возвращено обновление [updateStoryID](/constructor/updateStoryID/) с идентификатором истории (`id`), присвоенным этой истории (как и для сообщений, `random_id` указывает `random_id`, переданный в [stories.sendStory](/method/stories.sendStory/): так вы можете понять, какой истории присвоен конкретный `id`, посмотрев, в каком вызове [stories.sendStory](/method/stories.sendStory/) был возвращённый `random_id`).

```
updateStoryID#1bf335b9 id:int random_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>id</code>, присвоенный истории.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><code>random_id</code>, переданный в <a href="/method/stories.sendStory">stories.sendStory</a>. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [stories.sendStory](/method/stories.sendStory/)

Загружает [историю Telegram](/api/stories/).

[@term:peer] Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ через оборачивание запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора управляемого бизнес-пользователя в `peer`.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [updateStoryID](/constructor/updateStoryID/)

История успешно загружена.

После успешной загрузки истории будет возвращено обновление [updateStoryID](/constructor/updateStoryID/) с идентификатором истории (`id`), присвоенным этой истории (как и для сообщений, `random_id` указывает `random_id`, переданный в [stories.sendStory](/method/stories.sendStory/): так вы можете понять, какой истории присвоен конкретный `id`, посмотрев, в каком вызове [stories.sendStory](/method/stories.sendStory/) был возвращённый `random_id`).
