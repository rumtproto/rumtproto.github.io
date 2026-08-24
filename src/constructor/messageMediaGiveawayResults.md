---
title: "messageMediaGiveawayResults"
original: "https://core.telegram.org/constructor/messageMediaGiveawayResults"
section: ref
kind: constructor
description: "Розыгрыш с публичными победителями завершился; этот конструктор содержит сведения о победителях."
layout: layout.njk
---

# messageMediaGiveawayResults

[Розыгрыш](/api/giveaways/) с публичными победителями завершился; этот конструктор содержит сведения о победителях.

```
messageMediaGiveawayResults#ceaa3ea1 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:flags.4?int stars:flags.5?long prize_description:flags.1?string until_date:int = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, в розыгрыше участвовали только новые подписчики, подписавшиеся начиная с даты создания розыгрыша.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, розыгрыш был отменён, а средства полностью возвращены.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала или супергруппы, которые были автоматически <a href="/api/boost">забустены</a> победителями розыгрыша на срок действия подписки Premium.</td></tr><tr><td><strong>additional_peers_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Количество других каналов, участвовавших в розыгрыше.</td></tr><tr><td><strong>launch_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения с розыгрышем в <code>channel_id</code>.</td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число победителей в розыгрыше.</td></tr><tr><td><strong>unclaimed_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество ещё не полученных призов.</td></tr><tr><td><strong>winners</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>До 100 идентификаторов пользователей — победителей розыгрыша.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Длительность каждой подписки <a href="/api/premium">Telegram Premium</a> в розыгрыше, в месяцах.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/long">long</a></td><td>Для <a href="/api/stars#star-giveaways">розыгрышей Telegram Stars</a> — общее количество разыгрываемых Telegram Stars.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Может содержать текстовое описание дополнительных призов розыгрыша.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Момент времени (Unix timestamp), когда были определены победители. Может быть больше даты определения победителей, указанной в исходных параметрах розыгрыша.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
