---
title: "messageActionNoForwardsRequest"
original: "https://core.telegram.org/constructor/messageActionNoForwardsRequest"
section: ref
kind: constructor
description: "Отправляется только в личных чатах, если собеседник попросил отключить защиту контента »."
layout: layout.njk
---

# messageActionNoForwardsRequest

Отправляется только в личных чатах, если собеседник попросил отключить [защиту контента »](/api/content-protection/#for-users).

```
messageActionNoForwardsRequest#3e2793ba flags:# expired:flags.0?true prev_value:Bool new_value:Bool = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, этот запрос был принят или отклонён другим пользователем и поэтому больше не может быть использован.</td></tr><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Предыдущее состояние защиты.</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Новый запрошенный статус защиты.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Защита контента](/api/content-protection/)

Пользователи и боты, желающие сохранить приватность своих сообщений, а также владельцы групп и каналов, желающие оставить свой контент доступным только участникам, могут включить защиту контента: она препятствует созданию снимков экрана и копированию, отключает пересылку сообщений и ограничивает возможность сохранять медиа из публикаций.
