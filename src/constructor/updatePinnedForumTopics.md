---
title: "updatePinnedForumTopics"
original: "https://core.telegram.org/constructor/updatePinnedForumTopics"
section: ref
kind: constructor
description: "Изменились закреплённые темы форума."
layout: layout.njk
---

# updatePinnedForumTopics

Изменились [закреплённые темы](/api/forum/#forum-topics) форума.

```
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Форум-супергруппа, личный чат (для ботов с поддержкой форумов) или форум бота (для пользователей), где находится тема.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Упорядоченный список идентификаторов всех закреплённых тем.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
