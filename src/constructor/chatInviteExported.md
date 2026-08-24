---
title: "chatInviteExported"
original: "https://core.telegram.org/constructor/chatInviteExported"
section: ref
kind: constructor
description: "Экспортированное приглашение в чат"
layout: layout.njk
---

# chatInviteExported

Экспортированное приглашение в чат

```
chatInviteExported#a22cbd96 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int subscription_expired:flags.10?int title:flags.8?string subscription_pricing:flags.9?StarsSubscriptionPricing = ExportedChatInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Было ли это приглашение в чат отозвано</td></tr><tr><td><strong>permanent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Бессрочно ли это приглашение в чат</td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Потребуется ли одобрение для пользователей, вступающих в канал или группу по этой пригласительной ссылке</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Пригласительная ссылка на чат</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор администратора, создавшего эту пригласительную ссылку</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда была создана эта пригласительная ссылка</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Когда эта пригласительная ссылка изменялась в последний раз</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Когда истекает срок действия этого приглашения в чат</td></tr><tr><td><strong>usage_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Максимальное число пользователей, которые могут присоединиться по этой ссылке</td></tr><tr><td><strong>usage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Сколько пользователей вступило по этой ссылке</td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/int">int</a></td><td>Количество пользователей, уже воспользовавшихся этой ссылкой для вступления</td></tr><tr><td><strong>subscription_expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Для <a href="/api/stars#star-subscriptions">подписок за Telegram Stars »</a> содержит число участников чата, которые ранее вступили в чат по этой ссылке, но уже покинули его из-за окончания срока подписки.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/string">string</a></td><td>Произвольное описание пригласительной ссылки, видимое только администраторам</td></tr><tr><td><strong>subscription_pricing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/StarsSubscriptionPricing">StarsSubscriptionPricing</a></td><td>Для <a href="/api/stars#star-subscriptions">подписок за Telegram Stars »</a> содержит стоимость подписки, которую пользователь должен активировать, чтобы вступить в закрытый канал.</td></tr></tbody></table>

### Тип

[ExportedChatInvite](/type/ExportedChatInvite/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
