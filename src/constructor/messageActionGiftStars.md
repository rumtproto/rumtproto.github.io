---
title: "messageActionGiftStars"
original: "https://core.telegram.org/constructor/messageActionGiftStars"
section: ref
kind: constructor
description: "Вы подарили или вам подарили некоторое количество Telegram Stars."
layout: layout.njk
---

# messageActionGiftStars

Вы подарили или вам подарили некоторое количество [Telegram Stars](/api/stars/).

Это сервисное сообщение следует отображать под подходящим стикером из [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) — [набора стикеров »](/api/stickers/#stickersets):

-   Если `stars <= 1000`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   Если `stars < 2500`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"
-   Иначе выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/34E283A3.png" width="20" height="20" alt="4️⃣">"

```
messageActionGiftStars#45d5b021 flags:# currency:string amount:long stars:long crypto_currency:flags.0?string crypto_amount:flags.0?long transaction_id:flags.1?string = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена подарка в наименьших единицах валюты (целое число, не число с плавающей точкой). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество подаренных звёзд</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если подарок был куплен за криптовалюту — название криптовалюты.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Если подарок был куплен за криптовалюту — цена подарка в наименьших единицах криптовалюты.</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Идентификатор транзакции, видимый только получателю подарка.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Стикеры, показываемые при получении подписки Telegram Premium в подарок

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
