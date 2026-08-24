---
title: "channels.getAdminLog"
original: "https://core.telegram.org/method/channels.getAdminLog"
section: ref
kind: method
description: "Получить журнал администратора канала или супергруппы"
layout: layout.njk
---

# channels.getAdminLog

Получить журнал администратора [канала или супергруппы](/api/channel/)

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;
---functions---
channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поисковый запрос, может быть пустым</td></tr><tr><td><strong>events_filter</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ChannelAdminLogEventsFilter">ChannelAdminLogEventsFilter</a></td><td>Фильтр событий</td></tr><tr><td><strong>admins</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Показывать только события от этих администраторов</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Максимальный идентификатор возвращаемого сообщения (см. <a href="/api/offsets">постраничную выборку</a>)</td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Минимальный идентификатор возвращаемого сообщения (см. <a href="/api/offsets">постраничную выборку</a>)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[channels.AdminLogResults](/type/channels.AdminLogResults/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
