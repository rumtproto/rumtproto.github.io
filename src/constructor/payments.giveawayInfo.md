---
title: "payments.giveawayInfo"
original: "https://core.telegram.org/constructor/payments.giveawayInfo"
section: ref
kind: constructor
description: "Содержит информацию о текущем розыгрыше."
layout: layout.njk
---

# payments.giveawayInfo

Содержит информацию о текущем [розыгрыше](/api/giveaways/).

Если не задан ни один из флагов `participating`, `joined_too_early_date`, `admin_disallowed_chat_id` и `disallowed_country`, пользователь сейчас не участвует в розыгрыше, но может принять в нём участие, вступив во все каналы, указанные в поле [messageMediaGiveaway](/constructor/messageMediaGiveaway/).`channels`.

```
payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>participating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Текущий пользователь участвует в розыгрыше.</td></tr><tr><td><strong>preparing_results</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, розыгрыш завершился и результаты готовятся.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда розыгрыш был начат</td></tr><tr><td><strong>joined_too_early_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Текущий пользователь не может участвовать в розыгрыше, поскольку он уже был участником канала на момент начала розыгрыша, а при запуске розыгрыша был задан флаг <code>only_new_subscribers</code>.</td></tr><tr><td><strong>admin_disallowed_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Если установлено, текущий пользователь не может участвовать в розыгрыше, поскольку является администратором одного из каналов (идентификатор указан в этом флаге), создавших розыгрыш.</td></tr><tr><td><strong>disallowed_country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Если установлено, текущий пользователь не может участвовать в этом розыгрыше, поскольку его номер телефона принадлежит указанной недопустимой стране (задаётся двухбуквенным кодом страны по стандарту ISO 3166-1 alpha-2).</td></tr></tbody></table>

### Тип

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Содержит информацию о [розыгрыше, подробнее см. здесь »](/api/giveaways/).
