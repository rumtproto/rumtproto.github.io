---
title: "messageMediaGiveaway"
original: "https://core.telegram.org/constructor/messageMediaGiveaway"
section: ref
kind: constructor
description: "Содержит информацию о розыгрыше, подробнее см. здесь »."
layout: layout.njk
---

# messageMediaGiveaway

Содержит информацию о [розыгрыше, подробнее см. здесь »](/api/giveaways/).

```
messageMediaGiveaway#aa073beb flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:flags.4?int stars:flags.5?long until_date:int = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, участвовать в розыгрыше смогут только новые подписчики, подписавшиеся не ранее даты создания розыгрыша.</td></tr><tr><td><strong>winners_are_visible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, победители розыгрыша публичны и будут перечислены в сообщении <a href="/constructor/messageMediaGiveawayResults">messageMediaGiveawayResults</a>, которое будет автоматически отправлено в канал по завершении розыгрыша.</td></tr><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Каналы, на которые пользователь должен подписаться для участия в розыгрыше.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Если установлено, участвовать в розыгрыше могут только пользователи, проживающие в этих странах (заданных списком двухбуквенных кодов стран по стандарту ISO 3166-1 alpha-2); иначе ограничений по странам нет.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Может содержать текстовое описание дополнительных призов розыгрыша.</td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество разыгрываемых подписок <a href="/api/premium">Telegram Premium</a>.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Длительность каждой подписки <a href="/api/premium">Telegram Premium</a> в розыгрыше, в месяцах.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/long">long</a></td><td>Для <a href="/api/stars#star-giveaways">розыгрышей Telegram Stars</a> — общее количество разыгрываемых Telegram Stars.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата окончания розыгрыша.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

[Розыгрыш](/api/giveaways/) с публичными победителями завершился; этот конструктор содержит сведения о победителях.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
