---
title: "payments.getPaymentForm"
original: "https://core.telegram.org/method/payments.getPaymentForm"
section: ref
kind: method
description: "Получить форму оплаты"
layout: layout.njk
---

# payments.getPaymentForm

Получить форму оплаты

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;
---functions---
payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice">InputInvoice</a></td><td>Счёт</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/DataJSON">DataJSON</a></td><td><a href="/api/bots/webapps#theme-parameters">Параметры темы оформления »</a></td></tr></tbody></table>

### Результат

[payments.PaymentForm](/type/payments.PaymentForm/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>API_GIFT_RESTRICTED_UPDATE_APP</td><td>Обновите приложение, чтобы получить доступ к API подарков.</td></tr><tr><td>400</td><td>BOOST_PEER_INVALID</td><td>Указанный <code>boost_peer</code> недействителен.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>Указанный метод <em>можно</em> использовать через <a href="/api/bots/connected-business-bots">бизнес-подключение</a> для некоторых операций, но в данном запросе была предпринята операция, недопустимая через бизнес-подключение.</td></tr><tr><td>400</td><td>BOT_INVOICE_INVALID</td><td>Указанный счёт недействителен.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>GIFT_MONTHS_INVALID</td><td>Значение, переданное в invoice.inputInvoicePremiumGiftStars.months, недействительно.</td></tr><tr><td>400</td><td>GIFT_STARS_INVALID</td><td>Указанное количество Stars недействительно.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>Указанный счёт недействителен.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>MONTH_INVALID</td><td>Число месяцев, указанное в inputInvoicePremiumGiftStars.months, недействительно.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>NO_PAYMENT_NEEDED</td><td>Улучшение или передача указанного подарка уже оплачены либо бесплатны.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PREMIUM_PURPOSE_INVALID</td><td>Указанный объект InputStorePaymentPurpose недействителен.</td></tr><tr><td>400</td><td>SLUG_INVALID</td><td>Указанный слаг счёта недействителен.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_CONVERTED</td><td>Указанный звёздный подарок уже обменян на Stars.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_REFUNDED</td><td>За указанный подарок уже был произведён возврат средств.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>Указанный подарок уже был улучшен до коллекционного.</td></tr><tr><td>406</td><td>STARGIFT_EXPORT_IN_PROGRESS</td><td>Выполняется экспорт подарка; подробное локализованное описание ошибки будет отправлено через <a href="/api/errors#406-not-acceptable">updateServiceNotification, как описано здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr><tr><td>400</td><td>STARGIFT_MESSAGE_INVALID</td><td>Указанное значение inputInvoiceStarGift.message недействительно.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>Указанный подарок не найден.</td></tr><tr><td>400</td><td>STARGIFT_NOT_OWNER</td><td>Вы не владелец подарка, который пытаетесь передать.</td></tr><tr><td>400</td><td>STARGIFT_NOT_UNIQUE</td><td>Нельзя передать неколлекционный подарок.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>Нельзя передать или продать подарок, принадлежащий другому пользователю.</td></tr><tr><td>400</td><td>STARGIFT_PEER_INVALID</td><td>Указанное значение inputSavedStarGiftChat.peer недействительно.</td></tr><tr><td>400</td><td>STARGIFT_RESELL_CURRENCY_NOT_ALLOWED</td><td>Нельзя купить этот подарок за указанную валюту (например, при попытке оплатить подарки за TON звёздами Stars).</td></tr><tr><td>400</td><td>STARGIFT_RESELL_TOO_EARLY_%d</td><td>Вы сможете перепродать этот подарок через %d секунд.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr><tr><td>400</td><td>STARGIFT_TRANSFER_TOO_EARLY_%d</td><td>Этот подарок пока нельзя передать, подождите %d секунд.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>Полученный подарок можно улучшить до коллекционного только в том случае, если установлен флаг <a href="/constructor/messageActionStarGift">messageActionStarGift</a>/<a href="/constructor/savedStarGift">savedStarGift</a>.<code>can_upgrade</code>.</td></tr><tr><td>406</td><td>STARS_FORM_AMOUNT_MISMATCH</td><td>Сумма в форме изменилась; получите новую форму с помощью <a href="/method/payments.getPaymentForm">payments.getPaymentForm</a> и начните процесс заново.</td></tr><tr><td>400</td><td>TO_ID_INVALID</td><td>Указанное поле <code>to_id</code> переданного inputInvoiceStarGiftResale или inputInvoiceStarGiftTransfer недействительно.</td></tr><tr><td>400</td><td>UNTIL_DATE_INVALID</td><td>Указана недопустимая дата окончания.</td></tr><tr><td>403</td><td>USER_DISALLOWED_STARGIFTS</td><td>Получатель настроил ограничения на то, какие категории звёздных подарков он готов принимать (уникальные, ограниченные или неограниченные): отправитель попытался получить форму оплаты для подарка из категории, которую получатель заблокировал.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [savedStarGift](/constructor/savedStarGift/)

Представляет [подарок](/api/gifts/), принадлежащий пиру.

#### [payments.getPaymentForm](/method/payments.getPaymentForm/)

Получить форму оплаты
