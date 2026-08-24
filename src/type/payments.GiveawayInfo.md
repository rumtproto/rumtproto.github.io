---
title: "payments.GiveawayInfo"
original: "https://core.telegram.org/type/payments.GiveawayInfo"
section: ref
kind: type
description: "Информация о розыгрыше Telegram Premium."
layout: layout.njk
---

# Payments.GiveawayInfo

Информация о [розыгрыше Telegram Premium](/api/giveaways/).

```
payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;

---functions---

payments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.giveawayInfo">payments.giveawayInfo</a></td><td>Содержит информацию о текущем <a href="/api/giveaways">розыгрыше</a>.<br><br>Если не задан ни один из флагов <code>participating</code>, <code>joined_too_early_date</code>, <code>admin_disallowed_chat_id</code> и <code>disallowed_country</code>, пользователь сейчас не участвует в розыгрыше, но может принять в нём участие, подписавшись на все каналы, указанные в поле <a href="/constructor/messageMediaGiveaway">messageMediaGiveaway</a>.<code>channels</code>.</td></tr><tr><td><a href="/constructor/payments.giveawayInfoResults">payments.giveawayInfoResults</a></td><td><a href="/api/giveaways">Розыгрыш</a> завершён.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getGiveawayInfo">payments.getGiveawayInfo</a></td><td>Получить сведения о <a href="/api/giveaways">розыгрыше Telegram Premium »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
