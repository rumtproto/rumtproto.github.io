---
title: "pollAnswerVoters"
original: "https://core.telegram.org/constructor/pollAnswerVoters"
section: ref
kind: constructor
description: "Вариант ответа в опросе и то, как за него голосовали пользователи"
layout: layout.njk
---

# pollAnswerVoters

Вариант ответа в опросе и то, как за него голосовали пользователи

```
pollAnswerVoters#3b6ddad2 flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:int = PollAnswerVoters;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>chosen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Выбрали ли мы этот вариант ответа</td></tr><tr><td><strong>correct</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Для викторин — является ли выбранный нами вариант правильным</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр, который необходимо передать в <a href="/method/messages.sendVote">messages.sendVote</a>.</td></tr><tr><td><strong>voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Сколько пользователей проголосовало за этот вариант</td></tr><tr><td><strong>recent_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Пиры последних проголосовавших за этот вариант; взаимоисключающе с <code>voters</code></td></tr></tbody></table>

### Тип

[PollAnswerVoters](/type/PollAnswerVoters/)

### Связанные страницы

#### [messages.sendVote](/method/messages.sendVote/)

Проголосовать в [опросе](/constructor/poll/)

Начиная со слоя 159 голос отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Перед голосованием клиентам следует проверить, что пользователю действительно разрешено голосовать: голосование невозможно, если опрос закрыт, если он [только для подписчиков »](/api/poll/#subscriber-only-polls), а у пользователя нет нужной подписки, либо если он [ограничен по странам »](/api/poll/#country-restricted-polls), а [`phone_country_iso2` »](/api/config/#phone-country-iso2) пользователя отсутствует в списке разрешённых стран опроса. Полный перечень условий см. в разделе [ограничения на голосование »](/api/poll/#vote-restrictions).
