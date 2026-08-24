---
title: "messageActionPrizeStars"
original: "https://core.telegram.org/constructor/messageActionPrizeStars"
section: ref
kind: constructor
description: "Вы выиграли некоторое количество Telegram Stars в розыгрыше Telegram Star »."
layout: layout.njk
---

# messageActionPrizeStars

Вы выиграли некоторое количество [Telegram Stars](/api/stars/) в [розыгрыше Telegram Star »](/api/giveaways/#star-giveaways).

Это сервисное сообщение следует отображать под подходящим стикером из [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) — [набора стикеров »](/api/stickers/#stickersets):

-   Если `stars <= 1000`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   Если `stars < 2500`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"
-   Иначе выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/34E283A3.png" width="20" height="20" alt="4️⃣">"

```
messageActionPrizeStars#b00c47a2 flags:# unclaimed:flags.0?true stars:long transaction_id:string boost_peer:Peer giveaway_msg_id:int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unclaimed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, это обозначает обратную транзакцию, возвращающую оставшиеся stars создателю розыгрыша, если к моменту завершения розыгрыша число участников канала оказалось меньше числа победителей розыгрыша.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество выигранных вами Telegram Stars</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор транзакции с Telegram Stars.</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Идентификатор пира, который был автоматически забущен победителями розыгрыша.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения, содержащего <a href="/constructor/messageMediaGiveaway">messageMediaGiveaway</a></td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Содержит информацию о [розыгрыше, подробнее см. здесь »](/api/giveaways/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Стикеры, показываемые при получении подписки Telegram Premium в подарок

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
