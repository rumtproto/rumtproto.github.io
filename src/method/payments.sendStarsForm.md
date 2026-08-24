---
title: "payments.sendStarsForm"
original: "https://core.telegram.org/method/payments.sendStarsForm"
section: ref
kind: method
description: "Произвести оплату с помощью Telegram Stars, подробнее »."
layout: layout.njk
---

# payments.sendStarsForm

Произвести оплату с помощью [Telegram Stars, подробнее »](/api/stars/#using-stars).

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;
---functions---
payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор формы оплаты</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice">InputInvoice</a></td><td>Счёт</td></tr></tbody></table>

### Результат

[payments.PaymentResult](/type/payments.PaymentResult/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>API_GIFT_RESTRICTED_UPDATE_APP</td><td>Обновите приложение, чтобы получить доступ к API подарков.</td></tr><tr><td>400</td><td>BALANCE_TOO_LOW</td><td>Транзакцию невозможно завершить, так как текущий <a href="/api/stars">баланс Telegram Stars</a> слишком мал.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>Указанный метод <em>можно</em> использовать через <a href="/api/bots/connected-business-bots">бизнес-подключение</a> для некоторых операций, но в данном запросе была предпринята операция, недопустимая через бизнес-подключение.</td></tr><tr><td>400</td><td>BOT_INVOICE_INVALID</td><td>Указанный счёт недействителен.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>FORM_EXPIRED</td><td>Форма была создана более 10 минут назад, и срок её действия истёк; создайте её заново с помощью <a href="/method/payments.getPaymentForm">payments.getPaymentForm</a> и передайте новый <code>form_id</code>.</td></tr><tr><td>400</td><td>FORM_ID_EMPTY</td><td>Указанный идентификатор формы пуст.</td></tr><tr><td>400</td><td>FORM_SUBMIT_DUPLICATE</td><td>Эта же форма оплаты уже была отправлена. .</td></tr><tr><td>400</td><td>FORM_UNSUPPORTED</td><td>Обновите клиент.</td></tr><tr><td>400</td><td>GIFT_STARS_INVALID</td><td>Указанное количество Stars недействительно.</td></tr><tr><td>400</td><td>MEDIA_ALREADY_PAID</td><td>Вы уже оплатили указанное медиа.</td></tr><tr><td>400</td><td>MONTH_INVALID</td><td>Число месяцев, указанное в inputInvoicePremiumGiftStars.months, недействительно.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>406</td><td>PRECHECKOUT_FAILED</td><td>Предварительная проверка платежа не пройдена; подробное локализованное описание ошибки будет отправлено через <a href="/api/errors#406-not-acceptable">updateServiceNotification, как описано здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>PURPOSE_INVALID</td><td>Указанное назначение платежа недействительно.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>Указанный подарок уже был улучшен до коллекционного.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>Указанный подарок не найден.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>Нельзя передать или продать подарок, принадлежащий другому пользователю.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr><tr><td>400</td><td>STARGIFT_USAGE_LIMITED</td><td>Подарок распродан.</td></tr><tr><td>400</td><td>STARGIFT_USER_USAGE_LIMITED</td><td>Вы достигли лимита starGift.limited_per_user и больше не можете покупать подарки этого типа.</td></tr><tr><td>406</td><td>STARS_FORM_AMOUNT_MISMATCH</td><td>Сумма в форме изменилась; получите новую форму с помощью <a href="/method/payments.getPaymentForm">payments.getPaymentForm</a> и начните процесс заново.</td></tr><tr><td>400</td><td>TO_ID_INVALID</td><td>Указанное поле <code>to_id</code> переданного inputInvoiceStarGiftResale или inputInvoiceStarGiftTransfer недействительно.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [payments.getPaymentForm](/method/payments.getPaymentForm/)

Получить форму оплаты

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.
