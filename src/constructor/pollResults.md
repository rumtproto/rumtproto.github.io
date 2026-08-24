---
title: "pollResults"
original: "https://core.telegram.org/constructor/pollResults"
section: ref
kind: constructor
description: "Результаты опроса"
layout: layout.njk
---

# pollResults

Результаты опроса

```
pollResults#7adf2420 flags:# min:flags.0?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> = PollResults;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>[@term:min] Аналогично <a href="/api/min">min</a>-объектам, используется для конструкторов опросов, одинаковых для всех пользователей, поэтому в них нет варианта, выбранного текущим пользователем (получить полные результаты опроса можно с помощью <a href="/method/messages.getPollResults">messages.getPollResults</a>).</td></tr><tr><td><strong>has_unread_votes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Есть ли в этом неанонимном опросе непрочитанные голоса, см. <a href="/api/poll#unread-poll-votes">опросы »</a></td></tr><tr><td><strong>can_view_stats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Может ли текущий пользователь просматривать подробную <a href="/api/stats#poll-statistics">статистику опроса »</a></td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PollAnswerVoters">PollAnswerVoters</a>&gt;</td><td>Результаты опроса</td></tr><tr><td><strong>total_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Общее число людей, проголосовавших в опросе</td></tr><tr><td><strong>recent_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Идентификаторы последних пользователей, недавно проголосовавших в опросе</td></tr><tr><td><strong>solution</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Пояснение к ответу на викторину</td></tr><tr><td><strong>solution_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста в пояснении к ответу на викторину</a></td></tr><tr><td><strong>solution_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/MessageMedia">MessageMedia</a></td><td>Необязательное медиавложение, показываемое рядом с пояснением к ответу на викторину</td></tr></tbody></table>

### Тип

[PollResults](/type/PollResults/)

### Связанные страницы

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.

#### [messages.getPollResults](/method/messages.getPollResults/)

Получить результаты опроса

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
