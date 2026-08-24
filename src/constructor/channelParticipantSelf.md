---
title: "channelParticipantSelf"
original: "https://core.telegram.org/constructor/channelParticipantSelf"
section: ref
kind: constructor
description: "Я сам"
layout: layout.njk
---

# channelParticipantSelf

Я сам

```
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Вступил ли я по отдельному одобрению администратора</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, пригласивший меня в канал или супергруппу</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда я присоединился к каналу/супергруппе</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если установлено, содержит дату окончания текущего <a href="/api/stars#star-subscriptions">периода подписки за Telegram Stars »</a> для указанного участника.</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td><a href="/api/rank">Звание »</a> участника.</td></tr></tbody></table>

### Тип

[ChannelParticipant](/type/ChannelParticipant/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
