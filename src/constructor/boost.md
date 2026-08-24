---
title: "boost"
original: "https://core.telegram.org/constructor/boost"
section: ref
kind: constructor
description: "Информация об одном или нескольких бустах, применённых определённым пользователем."
layout: layout.njk
---

# boost

Информация об одном или нескольких [бустах](/api/boost/), применённых определённым пользователем.

```
boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли этот буст начислен потому, что канал или супергруппа <a href="/api/giveaways">напрямую подарили пользователю подписку</a>.</td></tr><tr><td><strong>giveaway</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Был ли этот буст начислен потому, что пользователь был выбран в <a href="/api/giveaways">розыгрыше, запущенном каналом или супергруппой</a>.</td></tr><tr><td><strong>unclaimed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, пользователь ещё не вызвал <a href="/method/payments.applyGiftCode">payments.applyGiftCode</a>, чтобы получить подписку, подаренную <a href="/api/giveaways">каналом напрямую или в розыгрыше</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Уникальный идентификатор этого набора бустов.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор пользователя, применившего буст.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Идентификатор сообщения с <a href="/api/giveaways">розыгрышем</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда был применён буст</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда истекает срок действия буста</td></tr><tr><td><strong>used_gift_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Созданный код подарочной подписки Telegram Premium; задаётся только в том случае, если задано поле <code>gift</code> или <code>giveaway</code> И при этом код предназначен текущему авторизованному пользователю либо уже был активирован.</td></tr><tr><td><strong>multiplier</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Если установлено, этот буст считается за <code>multiplier</code> бустов, иначе он считается за один буст.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/long">long</a></td><td>Количество Telegram Stars, распределённых между победителями розыгрыша.</td></tr></tbody></table>

### Тип

[Boost](/type/Boost/)

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [payments.applyGiftCode](/method/payments.applyGiftCode/)

Активировать [подарочный код Telegram Premium »](/api/giveaways/)

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
