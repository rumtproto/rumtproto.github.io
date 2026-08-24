---
title: "inputMediaInvoice"
original: "https://core.telegram.org/constructor/inputMediaInvoice"
section: ref
kind: constructor
description: "Сформированный счёт платежа через бота"
layout: layout.njk
---

# inputMediaInvoice

Сформированный счёт [платежа через бота](https://core.telegram.org/bots/payments)

```
inputMediaInvoice#405fef0d flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:flags.3?string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название товара, 1–32 символа</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание товара, 1–255 символов</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputWebDocument">InputWebDocument</a></td><td>URL фотографии товара для счёта. Это может быть фотография товара или рекламное изображение услуги. Людям больше нравится, когда они видят, за что платят.</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Сам счёт</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом, 1–128 байт. Она не показывается пользователю, используйте её для своих внутренних процессов.</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Токен платёжного провайдера, полученный через <a href="https://t.me/botfather">Botfather</a></td></tr><tr><td><strong>provider_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Закодированные в JSON данные о счёте, которые будут переданы платёжному провайдеру. Подробное описание обязательных полей должен предоставить платёжный провайдер.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Уникальный <a href="/api/links#bot-links">стартовый параметр глубокой ссылки на бота</a>. Если поле задано, у пересланных копий отправленного сообщения будет URL-кнопка с <a href="/api/links#bot-links">глубокой ссылкой</a> на бота (вместо кнопки оплаты), а это значение будет использовано как стартовый параметр. Если поле не задано, у пересланных копий отправленного сообщения будет кнопка оплаты, позволяющая нескольким пользователям платить прямо из пересланного сообщения по одному и тому же счёту.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputMedia">InputMedia</a></td><td>Устарело</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Bot Payments API — платежи в ботах](https://core.telegram.org/bots/payments)
