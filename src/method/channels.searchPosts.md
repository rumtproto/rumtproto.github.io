---
title: "channels.searchPosts"
original: "https://core.telegram.org/method/channels.searchPosts"
section: ref
kind: method
description: "Глобальный поиск постов в публичных каналах » (_в том числе_ в тех, участниками которых мы не являемся) по определённому хештегу _или_ по полнотекстовому запросу."
layout: layout.njk
---

# channels.searchPosts

Глобальный поиск постов в публичных [каналах »](/api/channel/) (_в том числе_ в тех, участниками которых мы не являемся) по определённому хештегу _или_ по полнотекстовому запросу.

Должно быть задано ровно одно из полей `query` и `hashtag`.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hashtag</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Хештег для поиска, без символа <code>#</code>.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Полнотекстовый запрос: каждому пользователю доступно ограниченное число бесплатных полнотекстовых поисков, после чего требуется оплата; подробнее обо всём процессе см. <a href="/api/search#posts-tab">здесь »</a>.</td></tr><tr><td><strong>offset_rate</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Изначально 0, затем устанавливается в <a href="/constructor/messages.messagesSlice">параметр <code>next_rate</code> конструктора messages.messagesSlice</a>, а если он отсутствует — в <code>date</code> последнего возвращённого сообщения.</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Для полнотекстового поиска по постам (<code>query</code>) разрешает оплатить поиск указанным количеством Stars; подробнее обо всём процессе см. <a href="/api/search#posts-tab">здесь »</a>.</td></tr></tbody></table>

### Результат

[messages.Messages](/type/messages.Messages/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>420</td><td>FROZEN_METHOD_INVALID</td><td>Текущий аккаунт <a href="/api/auth#frozen-accounts">заморожен</a> и поэтому не может выполнить указанное действие.</td></tr><tr><td>400</td><td>OFFSET_PEER_ID_INVALID</td><td>Указанный пир смещения недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Неполный список сообщений и вспомогательных данных.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
