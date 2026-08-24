---
title: "messages.searchGlobal"
original: "https://core.telegram.org/method/messages.searchGlobal"
section: ref
kind: method
description: "Глобальный поиск сообщений и пиров"
layout: layout.njk
---

# messages.searchGlobal

Глобальный поиск сообщений и пиров

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>broadcasts_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, возвращает результаты только из каналов (используется во <a href="/api/search#global-search">вкладке глобального поиска по каналам »</a>).</td></tr><tr><td><strong>groups_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Искать ли только в группах</td></tr><tr><td><strong>users_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Искать ли только в личных чатах</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Запрос</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Фильтр глобального поиска</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, метод вернёт только сообщения с датой больше min_date</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, метод вернёт только сообщения с датой меньше max_date</td></tr><tr><td><strong>offset_rate</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Изначально 0, затем устанавливается в <a href="/constructor/messages.messagesSlice">параметр <code>next_rate</code> конструктора messages.messagesSlice</a>, а если он отсутствует — в <code>date</code> последнего возвращённого сообщения.</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr></tbody></table>

### Результат

[messages.Messages](/type/messages.Messages/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FOLDER_ID_INVALID</td><td>Недопустимый идентификатор папки.</td></tr><tr><td>400</td><td>INPUT_FILTER_INVALID</td><td>Указанный фильтр недействителен.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>Поисковый запрос пуст.</td></tr></tbody></table>

### Связанные страницы

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Неполный список сообщений и вспомогательных данных.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
