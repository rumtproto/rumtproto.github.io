---
title: "messages.getSearchResultsCalendar"
original: "https://core.telegram.org/method/messages.getSearchResultsCalendar"
section: ref
kind: method
description: "Возвращает информацию о следующих сообщениях указанного типа в чате с разбивкой по дням."
layout: layout.njk
---

# messages.getSearchResultsCalendar

Возвращает информацию о следующих сообщениях указанного типа в чате с разбивкой по дням.

Результаты возвращаются в обратном хронологическом порядке.  
Для последнего возвращённого дня результаты могут быть неполными.

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;
---functions---
messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором выполняется поиск</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>Искать в <a href="/api/saved-messages">диалоге сохранённых сообщений »</a> с этим идентификатором.</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Фильтр сообщений; фильтры <a href="/constructor/inputMessagesFilterEmpty">inputMessagesFilterEmpty</a> и <a href="/constructor/inputMessagesFilterMyMentions">inputMessagesFilterMyMentions</a> этим методом не поддерживаются.</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr></tbody></table>

### Результат

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/)

Фильтр отсутствует.

#### [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/)

Возвращать только сообщения, в которых [упомянут](/api/mentions/) текущий пользователь.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
