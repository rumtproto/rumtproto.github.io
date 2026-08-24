---
title: "pollAnswer"
original: "https://core.telegram.org/constructor/pollAnswer"
section: ref
kind: constructor
description: "Возможный вариант ответа в опросе"
layout: layout.njk
---

# pollAnswer

Возможный вариант ответа в опросе

```
pollAnswer#ff16e2ca text:TextWithEntities option:bytes = PollAnswer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текстовое представление ответа (только пользователи <a href="/api/premium">Premium</a> могут использовать здесь <a href="/api/custom-emoji">сущности пользовательских эмодзи</a>).</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр, который необходимо передать в <a href="/method/messages.sendVote">messages.sendVote</a>.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/MessageMedia">MessageMedia</a></td><td>Необязательное вложение, отображаемое рядом с ответом</td></tr><tr><td><strong>added_by</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>Пир, добавивший этот вариант ответа; задаётся только для вариантов, динамически добавленных в опрос с открытыми ответами, см. <a href="/api/poll#open-answer-polls">опросы »</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Когда был добавлен этот вариант ответа; задаётся только для вариантов, динамически добавленных в опрос с открытыми ответами</td></tr></tbody></table>

### Тип

[PollAnswer](/type/PollAnswer/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [messages.sendVote](/method/messages.sendVote/)

Проголосовать в [опросе](/constructor/poll/)

Начиная со слоя 159 голос отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Перед голосованием клиентам следует проверить, что пользователю действительно разрешено голосовать: голосование невозможно, если опрос закрыт, если он [только для подписчиков »](/api/poll/#subscriber-only-polls), а у пользователя нет нужной подписки, либо если он [ограничен по странам »](/api/poll/#country-restricted-polls), а [`phone_country_iso2` »](/api/config/#phone-country-iso2) пользователя отсутствует в списке разрешённых стран опроса. Полный перечень условий см. в разделе [ограничения на голосование »](/api/poll/#vote-restrictions).

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.
