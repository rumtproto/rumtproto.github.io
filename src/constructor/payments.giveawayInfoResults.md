---
title: "payments.giveawayInfoResults"
original: "https://core.telegram.org/constructor/payments.giveawayInfoResults"
section: ref
kind: constructor
description: "Розыгрыш завершён."
layout: layout.njk
---

# payments.giveawayInfoResults

[Розыгрыш](/api/giveaways/) завершён.

```
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>winner</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Являемся ли мы одним из победителей этого розыгрыша.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли розыгрыш отменён, а средства полностью возвращены.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата начала розыгрыша</td></tr><tr><td><strong>gift_code_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Если мы оказались одним из победителей этого розыгрыша, содержит <a href="/api/links#premium-giftcode-links">подарочный код Premium</a>; подробнее о полном процессе розыгрыша см. <a href="/api/giveaways">здесь »</a>.</td></tr><tr><td><strong>stars_prize</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Если мы оказались одним из победителей этого <a href="/api/giveaways#star-giveaways">розыгрыша Telegram Stars</a> — количество выигранных нами <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>finish_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата окончания розыгрыша. Может быть больше даты окончания, указанной в параметрах розыгрыша.</td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество победителей в розыгрыше</td></tr><tr><td><strong>activated_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Количество победителей, активировавших свои <a href="/api/links#premium-giftcode-links">подарочные коды</a>.</td></tr></tbody></table>

### Тип

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
