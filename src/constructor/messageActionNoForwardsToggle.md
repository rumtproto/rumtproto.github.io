---
title: "messageActionNoForwardsToggle"
original: "https://core.telegram.org/constructor/messageActionNoForwardsToggle"
section: ref
kind: constructor
description: "Отправляется только в личных чатах при включении или отключении защиты контента »."
layout: layout.njk
---

# messageActionNoForwardsToggle

Отправляется только в личных чатах при включении или отключении [защиты контента »](/api/content-protection/#for-users).

```
messageActionNoForwardsToggle#bf7d6572 prev_value:Bool new_value:Bool = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Предыдущее состояние защиты (если true, чат был защищён). При ответе на запросы может совпадать с <code>new_value</code>; подробнее обо всём процессе см. <a href="/api/content-protection#for-users">здесь »</a>.</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Новый статус защиты.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Защита контента](/api/content-protection/)

Пользователи и боты, желающие сохранить приватность своих сообщений, а также владельцы групп и каналов, желающие оставить свой контент доступным только участникам, могут включить защиту контента: она препятствует созданию снимков экрана и копированию, отключает пересылку сообщений и ограничивает возможность сохранять медиа из публикаций.
