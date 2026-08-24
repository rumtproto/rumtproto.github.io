---
title: "messages.search"
original: "https://core.telegram.org/method/messages.search"
section: ref
kind: method
description: "Поиск сообщений."
layout: layout.njk
---

# messages.search

Поиск сообщений.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пользователь или чат, в истории которого выполняется поиск, либо конструктор <a href="/constructor/inputPeerEmpty">(inputPeerEmpty)</a> для поиска во всех личных чатах и <a href="/api/channel">обычных группах (не каналах) »</a>. Для глобального поиска по всем чатам, группам, супергруппам и каналам используйте <a href="/method/messages.searchGlobal">messages.searchGlobal</a>.</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текстовый поисковый запрос</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Возвращать только сообщения, отправленные пользователем с указанным идентификатором</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>Искать в <a href="/api/saved-messages">диалоге сохранённых сообщений »</a> с этим идентификатором.</td></tr><tr><td><strong>saved_reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>С помощью этого флага можно искать <a href="/api/saved-messages#tags">сохранённые сообщения, помеченные »</a> одной или несколькими реакциями.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td><a href="/api/threads">Идентификатор ветки</a></td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Фильтр для получения только указанных типов сообщений</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, будут возвращены только сообщения с датой отправки больше переданной</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, будут возвращены только сообщения с датой отправки меньше переданной</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Возвращать только сообщения, начиная с указанного идентификатора сообщения</td></tr><tr><td><strong>add_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Дополнительное смещение</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Число возвращаемых результатов</a>; может быть равно 0, чтобы вернуть только счётчик сообщений.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Максимальный идентификатор возвращаемых сообщений</a></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Минимальный идентификатор возвращаемых сообщений</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets">Хеш выборки</a></td></tr></tbody></table>

### Результат

[messages.Messages](/type/messages.Messages/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>FROM_PEER_INVALID</td><td>Указанный from_id недействителен.</td></tr><tr><td>400</td><td>INPUT_FILTER_INVALID</td><td>Указанный фильтр недействителен.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PEER_ID_NOT_SUPPORTED</td><td>Указанный идентификатор пира не поддерживается.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>Поисковый запрос пуст.</td></tr><tr><td>400</td><td>TAKEOUT_INVALID</td><td>Указанный идентификатор выгрузки данных недействителен.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

Пустой конструктор, не задан ни пользователь, ни чат.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Глобальный поиск сообщений и пиров

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
