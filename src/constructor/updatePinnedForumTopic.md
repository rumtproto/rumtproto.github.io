---
title: "updatePinnedForumTopic"
original: "https://core.telegram.org/constructor/updatePinnedForumTopic"
section: ref
kind: constructor
description: "Тема форума » была закреплена или откреплена."
layout: layout.njk
---

# updatePinnedForumTopic

[Тема форума »](/api/forum/#forum-topics) была закреплена или откреплена.

```
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Была ли тема закреплена или откреплена</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Форум-супергруппа, личный чат (для ботов с поддержкой форумов) или форум бота (для пользователей), где находится тема.</td></tr><tr><td><strong>topic_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор темы</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
