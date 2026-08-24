---
title: "updateMessagePoll"
original: "https://core.telegram.org/constructor/updateMessagePoll"
section: ref
kind: constructor
description: "Результаты опроса изменились"
layout: layout.njk
---

# updateMessagePoll

Результаты опроса изменились

```
updateMessagePoll#aca1657b flags:# poll_id:long poll:flags.0?Poll results:PollResults = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир сообщения, содержащего опрос</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с опросом</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Если опрос находится в теме форума — идентификатор верхнего сообщения темы</td></tr><tr><td><strong>poll_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор опроса</td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Poll">Poll</a></td><td>Сам опрос, если серверу известно, что клиент ещё не закешировал его</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/PollResults">PollResults</a></td><td>Новые результаты опроса</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
