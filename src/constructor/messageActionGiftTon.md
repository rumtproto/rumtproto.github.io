---
title: "messageActionGiftTon"
original: "https://core.telegram.org/constructor/messageActionGiftTon"
section: ref
kind: constructor
description: "Вам подарили некоторое количество Grams."
layout: layout.njk
---

# messageActionGiftTon

Вам подарили некоторое количество Grams.

Это сервисное сообщение следует отображать под соответствующим стикером из [inputStickerSetTonGifts »](/constructor/inputStickerSetTonGifts/) — [набора стикеров »](/api/stickers/#stickersets):

-   Если `crypto_amount <= 10_000_000_000`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   Если `crypto_amount <= 50_000_000_000`, выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/31E283A3.png" width="20" height="20" alt="1️⃣">"
-   Иначе выберите стикер с эмодзи "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"

```
messageActionGiftTon#a8a3c699 flags:# currency:string amount:long crypto_currency:string crypto_amount:long transaction_id:flags.0?string = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название локализованной фиатной валюты.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Эквивалент в фиатной валюте (в валюте, указанной в <code>currency</code>) суммы, заданной в <code>crypto_amount</code>.</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название криптовалюты.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Сумма в наименьших единицах криптовалюты (для TON — одна миллиардная тона, то есть нанограмм).</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Идентификатор транзакции.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/)

Набор стикеров для подарков TON.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
