---
title: "messages.deleteSavedHistory"
original: "https://core.telegram.org/method/messages.deleteSavedHistory"
section: ref
kind: method
description: "Удаляет сообщения из темы монофорума » либо удаляет сообщения, пересланные от определённого пира в избранное »."
layout: layout.njk
---

# messages.deleteSavedHistory

Удаляет сообщения из [темы монофорума »](/api/monoforum/) либо удаляет сообщения, пересланные от определённого пира в [избранное »](/api/saved-messages/).

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, затрагивает сообщения переданной <a href="/api/monoforum">темы монофорума »</a>, иначе затрагивает <a href="/api/saved-messages">сохранённые сообщения »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, чьи сообщения будут удалены из <a href="/api/saved-messages">сохранённых сообщений »</a>, либо идентификатор темы.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальный идентификатор удаляемого сообщения</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Удалить все сообщения новее этой временной метки UNIX</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Удалить все сообщения старше этой временной метки UNIX</td></tr></tbody></table>

### Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
