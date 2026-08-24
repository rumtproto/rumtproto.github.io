---
title: "payments.exportInvoice"
original: "https://core.telegram.org/method/payments.exportInvoice"
section: ref
kind: method
description: "Создать глубокую ссылку на счёт"
layout: layout.njk
---

# payments.exportInvoice

Создать [глубокую ссылку на счёт](/api/links/#invoice-links)

```
payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;
---functions---
payments.exportInvoice#f91b065 invoice_media:InputMedia = payments.ExportedInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>invoice_media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Счёт</td></tr></tbody></table>

### Результат

[payments.ExportedInvoice](/type/payments.ExportedInvoice/)

### Этот метод доступен только ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>CURRENCY_TOTAL_AMOUNT_INVALID</td><td>Итоговая сумма всех цен недействительна.</td></tr><tr><td>400</td><td>INVOICE_PAYLOAD_INVALID</td><td>Указанная полезная нагрузка счёта недействительна.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Медиа недействительно.</td></tr><tr><td>400</td><td>PAYMENT_PROVIDER_INVALID</td><td>Указанный платёжный провайдер недействителен.</td></tr><tr><td>400</td><td>STARS_INVOICE_INVALID</td><td>Указанный счёт Telegram Stars недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>WEBDOCUMENT_MIME_INVALID</td><td>Указан недействительный MIME-тип веб-документа.</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_EMPTY</td><td>Указанный URL веб-документа пуст.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
