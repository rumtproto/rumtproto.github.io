---
title: "starsSubscription"
original: "https://core.telegram.org/constructor/starsSubscription"
section: ref
kind: constructor
description: "Представляет подписку за Telegram Stars »."
layout: layout.njk
---

# starsSubscription

Представляет [подписку за Telegram Stars »](/api/invites/#paid-invite-links).

```
starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>canceled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Была ли эта подписка отменена.</td></tr><tr><td><strong>can_refulfill</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Покинули ли мы связанный приватный канал, имея возможность вернуться в него через <a href="/method/payments.fulfillStarsSubscription">payments.fulfillStarsSubscription</a>, поскольку текущий период подписки ещё не истёк.</td></tr><tr><td><strong>missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Истекла ли эта подписка из-за того, что на балансе пользователя не хватает звёзд для её продления.</td></tr><tr><td><strong>bot_canceled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Устанавливается, если эта <a href="/api/subscriptions#bot-subscriptions">подписка на бота</a> была отменена ботом</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор подписки.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Идентификатор связанного личного чата.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата окончания текущего периода подписки.</td></tr><tr><td><strong>pricing</strong></td><td style="text-align: center;"><a href="/type/StarsSubscriptionPricing">StarsSubscriptionPricing</a></td><td>Стоимость подписки в Telegram Stars.</td></tr><tr><td><strong>chat_invite_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Пригласительная ссылка, используемая для возобновления подписки после её отмены или истечения.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Для подписок на ботов — название из счёта на подписку</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/WebDocument">WebDocument</a></td><td>Для подписок на ботов — фотография из счёта на подписку</td></tr><tr><td><strong>invoice_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/string">string</a></td><td>Для подписок на ботов — <a href="/api/links#invoice-links">идентификатор</a> счёта на подписку</td></tr></tbody></table>

### Тип

[StarsSubscription](/type/StarsSubscription/)

### Связанные страницы

#### [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/)

Повторно вступить в приватный канал, связанный с активной [подпиской за Telegram Stars »](/api/invites/#paid-invite-links).

#### [Подписки за звёзды](/api/subscriptions/)

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
