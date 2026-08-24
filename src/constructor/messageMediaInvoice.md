---
title: "messageMediaInvoice"
original: "https://core.telegram.org/constructor/messageMediaInvoice"
section: ref
kind: constructor
description: "Счёт"
layout: layout.njk
---

# messageMediaInvoice

Счёт

```
messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>shipping_address_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли запрошен адрес доставки</td></tr><tr><td><strong>test</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли это тестовым счётом</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название товара, 1–32 символа</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание товара, 1–255 символов</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/WebDocument">WebDocument</a></td><td>URL фотографии товара для счёта. Это может быть фотография товара или рекламное изображение услуги. Людям больше нравится, когда они видят, за что платят.</td></tr><tr><td><strong>receipt_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Идентификатор сообщения с чеком: если задан, клиентам следует заменить текст первой кнопки <a href="/constructor/keyboardButtonBuy">keyboardButtonBuy</a>, всегда прикреплённой к <a href="/constructor/message">сообщению</a>, локализованным вариантом слова <code>Receipt</code></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Трёхбуквенный код <a href="/bots/payments#supported-currencies">валюты</a> по ISO 4217 либо <code>XTR</code> для <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Итоговая цена в наименьших единицах валюты (целое число, не float/double). Например, для цены <code>US$ 1.45</code> следует передать <code>amount = 145</code>. См. параметр exp в <a href="/bots/payments/currencies.json">currencies.json</a>: он указывает число знаков после запятой для каждой валюты (2 для большинства валют).</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Уникальный параметр глубокой ссылки на бота, по которому можно сформировать этот счёт</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/MessageExtendedMedia">MessageExtendedMedia</a></td><td>Устарело</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [keyboardButtonBuy](/constructor/keyboardButtonBuy/)

Кнопка для покупки товара

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны начать [процесс оплаты по приложенному счёту](/api/payments/).

#### [message](/constructor/message/)

Сообщение

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
