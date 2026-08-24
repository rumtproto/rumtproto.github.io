---
title: "messages.getSearchResultsPositions"
original: "https://core.telegram.org/method/messages.getSearchResultsPositions"
section: ref
kind: method
description: "Возвращает разреженные позиции сообщений указанного типа в чате для реализации прокрутки общих медиа."
layout: layout.njk
---

# messages.getSearchResultsPositions

Возвращает разреженные позиции сообщений указанного типа в чате для реализации прокрутки общих медиа.

Результаты возвращаются в обратном хронологическом порядке (то есть по убыванию message\_id).

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;
---functions---
messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором выполняется поиск</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>Искать в <a href="/api/saved-messages">диалоге сохранённых сообщений »</a> с этим идентификатором.</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Фильтр сообщений; фильтры <a href="/constructor/inputMessagesFilterEmpty">inputMessagesFilterEmpty</a> и <a href="/constructor/inputMessagesFilterMyMentions">inputMessagesFilterMyMentions</a> этим методом не поддерживаются.</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[messages.SearchResultsPositions](/type/messages.SearchResultsPositions/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/)

Фильтр отсутствует.

#### [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/)

Возвращать только сообщения, в которых [упомянут](/api/mentions/) текущий пользователь.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
