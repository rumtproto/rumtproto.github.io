---
title: "account.saveAutoSaveSettings"
original: "https://core.telegram.org/method/account.saveAutoSaveSettings"
section: ref
kind: method
description: "Изменить настройки автосохранения"
layout: layout.njk
---

# account.saveAutoSaveSettings

Изменить настройки автосохранения

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveAutoSaveSettings#d69b8361 flags:# users:flags.0?true chats:flags.1?true broadcasts:flags.2?true peer:flags.3?InputPeer settings:AutoSaveSettings = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Должны ли новые настройки затрагивать все личные чаты</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Должны ли новые настройки затрагивать все группы</td></tr><tr><td><strong>broadcasts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Должны ли новые настройки затрагивать все <a href="/api/channel">каналы</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Должны ли новые настройки затрагивать конкретного пира</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings">AutoSaveSettings</a></td><td>Новые настройки автосохранения</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
