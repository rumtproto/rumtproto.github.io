---
title: "updatePeerBlocked"
original: "https://core.telegram.org/constructor/updatePeerBlocked"
section: ref
kind: constructor
description: "Мы заблокировали пира; подробнее о списках заблокированных см. здесь »."
layout: layout.njk
---

# updatePeerBlocked

Мы заблокировали пира; подробнее о списках заблокированных см. [здесь »](/api/block/).

```
updatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Был ли пир заблокирован или разблокирован</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли пир добавлен в список заблокированных для историй или удалён из него; если не установлено, обновление относится к основному списку блокировок, подробнее <a href="/api/block">см. здесь »</a>.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Заблокированный или разблокированный пир</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.
