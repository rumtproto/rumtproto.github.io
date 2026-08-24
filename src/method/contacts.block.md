---
title: "contacts.block"
original: "https://core.telegram.org/method/contacts.block"
section: ref
kind: method
description: "Добавляет пира в список заблокированных; подробнее см. здесь »."
layout: layout.njk
---

# contacts.block

Добавляет пира в список заблокированных; подробнее [см. здесь »](/api/block/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.block#2e2e8734 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли добавить пира в список заблокированных для историй; если не установлено, пир будет добавлен в основной список блокировок, подробнее <a href="/api/block">см. здесь »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CONTACT_ID_INVALID</td><td>Указанный идентификатор контакта недействителен.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.
