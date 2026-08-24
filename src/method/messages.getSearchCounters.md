---
title: "messages.getSearchCounters"
original: "https://core.telegram.org/method/messages.getSearchCounters"
section: ref
kind: method
description: "Получить количество результатов, которые вернул бы вызов messages.search с теми же параметрами"
layout: layout.njk
---

# messages.getSearchCounters

Получить количество результатов, которые вернул бы вызов [messages.search](/method/messages.search/) с теми же параметрами

```
---functions---
messages.getSearchCounters#1bbcf300 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer top_msg_id:flags.0?int filters:Vector<MessagesFilter> = Vector<messages.SearchCounter>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором выполняется поиск</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>Искать в <a href="/api/saved-messages">диалоге сохранённых сообщений »</a> с этим идентификатором.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, учитывать только сообщения в указанной <a href="/api/forum#forum-topics">теме форума</a></td></tr><tr><td><strong>filters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessagesFilter">MessagesFilter</a>&gt;</td><td>Фильтры поиска</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[messages.SearchCounter](/type/messages.SearchCounter/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [messages.search](/method/messages.search/)

Поиск сообщений.
