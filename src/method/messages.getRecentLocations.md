---
title: "messages.getRecentLocations"
original: "https://core.telegram.org/method/messages.getRecentLocations"
section: ref
kind: method
description: "Получить все недавние трансляции геопозиции, отправленные в определённый чат: возвращает не более одного сообщения с геопозицией (messageMediaGeoLive) на каждого участника чата."
layout: layout.njk
---

# messages.getRecentLocations

Получить все недавние [трансляции геопозиции](/api/live-location/), отправленные в определённый чат: возвращает не более одного сообщения с геопозицией ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) на каждого участника чата.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getRecentLocations#702a40e0 peer:InputPeer limit:int hash:long = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Целевая группа или личный чат.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Результат

[messages.Messages](/type/messages.Messages/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Трансляция геопозиции](/api/live-location/)

Telegram позволяет отправлять в чат геопозицию пользователя в реальном времени, при желании задавая оповещение о приближении.

#### [messageMediaGeoLive](/constructor/messageMediaGeoLive/)

Обозначает [геопозицию в реальном времени](/api/live-location/)
