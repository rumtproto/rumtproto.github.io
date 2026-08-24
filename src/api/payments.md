---
title: "API платежей"
original: "https://core.telegram.org/api/payments"
section: api
description: "Вы можете принимать платежи от пользователей Telegram через ботов Telegram."
layout: layout.njk
---

# API платежей

Вы можете принимать платежи от пользователей Telegram через [ботов Telegram](https://core.telegram.org/bots).

> Примечание: эта статья предназначена для разработчиков, работающих с MTProto API. Если вам нужен общий обзор платежей в Telegram, загляните в [блог Telegram](https://telegram.org/blog/payments) и в [руководство по платежам в Bot API](https://core.telegram.org/bots/payments).

### Знакомство с платежами

Боты Telegram могут принимать от пользователей оплату товаров и услуг. Подробнее о том, как устроены платежи, рассказано в [блоге Telegram](https://telegram.org/blog/payments) и в [руководстве по платежам в Bot API](https://core.telegram.org/bots/payments).

На этой странице подробно разбираются действия, необходимые для работы с платежами через **MTProto API**.

> Упрощённый вариант этого процесса доступен только ботам, использующим [Bot API](https://core.telegram.org/bots/payments).

Первый шаг для бота — [включить платежи, как описано здесь »](https://core.telegram.org/bots/payments#the-payments-api).

Далее работа с платежами выглядит следующим образом.

### 1\. Создание счёта

#### 1.1 Создание сообщения со счётом

```
inputWebDocument#9bed434d url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = InputWebDocument;

labeledPrice#cb296bf8 label:string amount:long = LabeledPrice;

invoice#049ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;

inputMediaInvoice#405fef0d flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:flags.3?string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

[@term:invoice] Пользователь обращается к боту и просит что-нибудь купить. Бот формирует [inputMediaInvoice](/constructor/inputMediaInvoice/) с конструктором [invoice](/constructor/invoice/) — счётом, где описаны товар или услуга, сумма к оплате, а также запрашиваемые данные о доставке. В параметр `provider` конструктора [inputMediaInvoice](/constructor/inputMediaInvoice/) подставляется значение токена, [полученное ранее через Botfather](https://core.telegram.org/bots/payments#the-payments-api). Один бот-продавец может использовать несколько разных токенов для разных пользователей либо для разных товаров и услуг.

Для отправки счёта [invoice](/constructor/invoice/) используйте метод [messages.sendMedia](/method/messages.sendMedia/). К сообщению можно также прикрепить инлайн-клавиатуру через поле `reply_markup`: если оно передано, первой кнопкой обязана быть кнопка [keyboardButtonBuy](/constructor/keyboardButtonBuy/). Иначе инлайн-клавиатура будет создана автоматически, и единственной её кнопкой станет [keyboardButtonBuy](/constructor/keyboardButtonBuy/) с надписью `Pay 'total price'`.

Сообщение со счётом и кнопкой оплаты можно отправить только в личный чат с пользователем. Группы и каналы не поддерживаются.

#### 1.2 Создание ссылки на счёт

```
inputMediaInvoice#405fef0d flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:flags.3?string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;

payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;

---functions---

payments.exportInvoice#0f91b065 invoice_media:InputMedia = payments.ExportedInvoice;
```

[@term:deep link] Боты могут также создавать [глубокие ссылки на счёт](/api/links/#invoice-links) (`deep link` — ссылка, которая открывается непосредственно в приложении Telegram) с помощью метода [payments.exportInvoice](/method/payments.exportInvoice/).

[@term:Mini App] Возвращаемый конструктор [payments.exportedInvoice](/constructor/payments.exportedInvoice/) содержит [глубокую ссылку на счёт](/api/links/#invoice-links), которой можно поделиться напрямую или отправить её в Mini App бота (встроенное веб-приложение внутри Telegram) [событием `web_app_open_invoice`](/api/web-events/#web-app-open-invoice).

### 2\. Информация о заказе

#### 2.1 Счёт

```
keyboardButtonBuy#3fa53905 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;

keyboardButtonRow#77608b83 buttons:Vector<KeyboardButton> = KeyboardButtonRow;
replyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;

webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
webDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;

messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
```

Пользователь получает от бота [глубокую ссылку на счёт](/api/links/#invoice-links) либо конструктор [updateNewMessage](/constructor/updateNewMessage/), содержащий конструктор [messageMediaInvoice](/constructor/messageMediaInvoice/) с основными сведениями о товаре.

В случае сообщений со счётом к [сообщению](/constructor/message/) дополнительно прикреплена клавиатура [replyInlineMarkup](/constructor/replyInlineMarkup/). Первой кнопкой этой клавиатуры всегда будет [keyboardButtonBuy](/constructor/keyboardButtonBuy/).

Чтобы запросить оплату в [Telegram Stars](/api/stars/), передайте `XTR` в поле `currency`.

#### 2.2 Получение информации о счёте на товар

```
inputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;

inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
inputInvoiceSlug#c326caef slug:string = InputInvoice;
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceChatInviteSubscription#34e793f1 hash:string = InputInvoice;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;

invoice#049ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;

paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;

paymentSavedCredentialsCard#cdc27a1f id:string title:string = PaymentSavedCredentials;

payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;

payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;

---functions---

payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;
```

Метод [payments.getPaymentForm](/method/payments.getPaymentForm/) возвращает [платёжную форму](/constructor/payments.paymentForm/) по счёту; в параметре `invoice` передаётся одно из следующих значений:

-   [inputInvoiceMessage](/constructor/inputInvoiceMessage/) — используется:
    -   Если пользователь нажимает кнопку [keyboardButtonBuy](/constructor/keyboardButtonBuy/); содержит ID сообщения с предпросмотром счёта.
    -   При [покупке платного медиа »](/api/paid-media/).
-   [inputInvoiceSlug](/constructor/inputInvoiceSlug/)
    -   Если пользователь открывает [глубокую ссылку на счёт](/api/links/#invoice-links), содержит параметр `slug`
    -   Если клиенту нужно обработать платёж за [Telegram Premium](/api/premium/), содержит [параметр конфигурации приложения `premium_invoice_slug` »](/api/config/#premium-invoice-slug)
-   [inputInvoicePremiumGiftCode](/constructor/inputInvoicePremiumGiftCode/)
    -   Используется, если пользователь хочет запустить [розыгрыш](/api/giveaways/) в канале или отправить [подарочные коды](/api/giveaways/) участникам канала в обмен на [бусты](/api/boost/).  
        Поле `purpose` следует заполнить конструктором [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/) для [розыгрышей](/api/giveaways/) и [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) для [подарков](/api/giveaways/).  
        Поле `option` следует заполнить одним из вариантов розыгрыша, возвращаемых методом [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/).  
        Подробнее см. документацию по [розыгрышам »](/api/giveaways/).
-   [inputInvoiceStars](/constructor/inputInvoiceStars/)
    -   Используется для [покупки Telegram Stars](/api/stars/#buying-or-gifting-stars). Поле `option` следует заполнить одним из вариантов пополнения баланса звёзд, возвращаемых методом [payments.getStarsTopupOptions](/method/payments.getStarsTopupOptions/).  
        Подробнее см. документацию по [звёздам »](/api/stars/#buying-or-gifting-stars).
-   [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/)
    -   Используется для реализации [подписок »](/api/subscriptions/) на ботов и каналы.  
        Подробнее см. документацию по [подпискам »](/api/subscriptions/).
-   [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/)
    -   Используется для [покупки подарков за Telegram Stars](/api/gifts/).  
        Подробнее см. документацию по [подаркам »](/api/gifts/).
-   [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/)
    -   Используется, чтобы [оплатить превращение подарка в коллекционный](/api/gifts/#upgrade-a-gift-to-a-collectible-gift).  
        Подробнее см. документацию по [коллекционным подаркам »](/api/gifts/#collectible-gifts).
-   [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/)
    -   Используется, чтобы [оплатить за другого пользователя превращение подарка в коллекционный](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade).  
        Подробнее см. документацию по [коллекционным подаркам »](/api/gifts/#collectible-gifts).
-   [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/)
    -   Используется, чтобы [оплатить передачу подарка другому пиру](/api/gifts/#transferring-collectible-gifts).  
        Подробнее см. документацию по [подаркам »](/api/gifts/#transferring-collectible-gifts).
-   [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/)
    -   Используется, чтобы [купить подарок при перепродаже](/api/gifts/#reselling-collectible-gifts).  
        Подробнее см. документацию по [подаркам »](/api/gifts/#reselling-collectible-gifts).
-   [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/)
    -   Используется, чтобы [подарить другому пользователю подписку Premium с оплатой в Telegram Stars](/api/premium/).  
        Подробнее см. документацию по [Telegram Premium »](/api/premium/)
-   [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/)
    -   Используется, чтобы [перевести Telegram Stars с баланса пользователя, управляемого бизнес-ботом, на баланс самого бота](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot).  
        Подробнее см. документацию по [Telegram Business »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot).

Возвращённая форма содержит поля, которые следует передать платёжному провайдеру вместе с полным [счётом](/constructor/invoice/). Кроме того, платёжная форма содержит сведения о ранее сохранённых платёжных данных и об информации о заказе (имя, номер телефона, адрес электронной почты, адрес доставки и так далее).

Полный [счёт](/constructor/invoice/) содержит сведения о том, какие данные требуются для оформления заказа, о цене и валюте, а также о том, тестовый ли это заказ (`test`). У регулярных платежей установлен флаг `recurring`, а поле `recurring_terms_url` ведёт на условия обслуживания такого платежа: пользователь обязан прочитать и принять их, прежде чем продолжить.

Если платёж проводится в Telegram Stars ([подробнее здесь »](/api/stars/)), возвращается [payments.paymentFormStars](/constructor/payments.paymentFormStars/)/[payments.paymentFormStarGift](/constructor/payments.paymentFormStarGift/) (учтите: этот конструктор используется для платежей в Telegram Stars в адрес ботов и пиров и **не** возвращается при _пополнении_ баланса Telegram Stars текущего аккаунта через [inputInvoiceStars](/constructor/inputInvoiceStars/)): в связанном счёте в поле `currency` будет указано `XTR`.

#### 2.3 Проверка информации

```
invoice#049ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;

postAddress#1e8caaeb street_line1:string street_line2:string city:string state:string country_iso2:string post_code:string = PostAddress;

paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;

payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;

---functions---

payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

[@term:msg_id] Если [**счёт**](/constructor/invoice/) запрашивает хоть какие-то данные (`name_requested`, `phone_requested`, `email_requested`, `shipping_address_requested`), пользователь обязан вызвать [payments.validateRequestedInfo](/method/payments.validateRequestedInfo/), передав требуемые данные (как обычно, `msg_id` — идентификатор сообщения со счётом). Пользователь может сохранить информацию о заказе для дальнейшего использования, установив флаг `save`. Данные могут подставляться автоматически, как описано в разделе [автозаполнение](#231-autofill).

Если в отправленных сведениях не найдено ошибок, [ответ](/constructor/payments.validatedRequestedInfo/) метода будет содержать флаг `id`, который понадобится позже для завершения платежа.

Если у счёта установлен флаг `flexible`, вызов метода [payments.validateRequestedInfo](/method/payments.validateRequestedInfo/) отправит боту [обновление с запросом доставки](/constructor/updateBotShippingQuery/), на которое бот ответит доступными вариантами доставки для указанного адреса, [как описано здесь »](#24-select-delivery-option). В этом случае возвращаемое значение будет также содержать поле `shipping_options` с доступными вариантами доставки.

Если в отправленных данных обнаружены ошибки, пользователю будет отправлено [сервисное уведомление](/constructor/updateServiceNotification/) с описанием ошибки от бота.

#### 2.3.1 Автозаполнение

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;

---functions---

payments.getSavedInfo#227d824b = payments.SavedInfo;
payments.clearSavedInfo#d83d70c1 flags:# credentials:flags.0?true info:flags.1?true = Bool;
```

Запрашиваемые поля можно заполнить автоматически — сведениями из поля `saved_info` [платёжной формы](/constructor/payments.paymentForm/) либо сведениями, запрошенными вручную методом [payments.getSavedInfo](/method/payments.getSavedInfo/).

Сохранённую информацию о заказе можно также очистить с помощью [payments.clearSavedInfo](/method/payments.clearSavedInfo/).

#### 2.4 Выбор варианта доставки

```
labeledPrice#cb296bf8 label:string amount:long = LabeledPrice;

shippingOption#b6213cdf id:string title:string prices:Vector<LabeledPrice> = ShippingOption;

updateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;

---functions---

messages.setBotShippingResults#e5f672fa flags:# query_id:long error:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = Bool;
```

Если был запрошен адрес доставки и бот выставил параметр `flexible`, то в момент, когда пользователь [проверяет сведения о заказе](#23-verifying-information), Telegram API отправит боту [updateBotShippingQuery](/constructor/updateBotShippingQuery/). Бот обязан ответить методом [messages.setBotShippingResults](/method/messages.setBotShippingResults/) — либо списком доступных вариантов доставки с соответствующими ценами, либо ошибкой (например, если доставка по указанному адресу невозможна).

Возвращённые варианты доставки или ошибка доставки будут переданы пользователю при [проверке сведений о заказе](#23-verifying-information).

### 3\. Оплата

#### 3.1 Оплата через Telegram Stars

```
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;

---functions---

payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

[@term:form_id] Если оплата должна проходить через [Telegram Stars](/api/stars/), будет возвращён конструктор [payments.paymentFormStars](/constructor/payments.paymentFormStars/) или [payments.paymentFormStarGift](/constructor/payments.paymentFormStarGift/), а на [шаге 4 »](#4-pre-checkout) вместо [payments.sendPaymentForm](/method/payments.sendPaymentForm/) вызывается [payments.sendStarsForm](/method/payments.sendStarsForm/) с полем `form_id` (идентификатором выданной сервером платёжной формы).

Повторный вызов [payments.sendStarsForm](/method/payments.sendStarsForm/) с тем же значением `form_id` **не** приведёт к повторному проведению операции.

Учтите, что возвращённая форма действительна только 10 минут, после чего вызов [payments.sendStarsForm](/method/payments.sendStarsForm/) вернёт ошибку `400` `FORM_EXPIRED`.  
Получив такую ошибку, просто сформируйте форму заново, как описано в [шаге 2.2 »](#22-getting-invoice-info-about-the-product), и вызовите [payments.sendStarsForm](/method/payments.sendStarsForm/) ещё раз.

Метод [payments.sendStarsForm](/method/payments.sendStarsForm/) вернёт ошибку `400` `BALANCE_TOO_LOW`, если текущего баланса Telegram Stars не хватает для проведения операции: получив эту ошибку, клиенту следует предложить пользователю [пополнить баланс Telegram Stars »](/api/stars/#buying-or-gifting-stars), прежде чем вызывать [payments.sendStarsForm](/method/payments.sendStarsForm/) повторно.

#### 3.2 Оплата через веб

```
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;

payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;

paymentFormMethod#88f8f21b url:string title:string = PaymentFormMethod;
```

[@term:payment gateway] Пользователь может выбрать либо основную платёжную площадку — по адресу `url` из [payments.paymentForm](/constructor/payments.paymentForm/), — либо любую из дополнительных площадок, по адресу `url` выбранного [paymentFormMethod](/constructor/paymentFormMethod/).  
Чтобы провести оплату, клиент открывает `url` выбранной платёжной площадки, указанный в [платёжной форме](/constructor/payments.paymentForm/); этот адрес ведёт на форму оплаты на сайте платёжного шлюза (`payment gateway` — внешняя система, которая принимает и обрабатывает платежи).  
Как только пользователь заканчивает вводить свои платёжные данные, платёжный шлюз порождает [веб-событие `payment_form_submit`](/api/web-events/#payment-form-submit), содержащее JSON-поля `credentials` и `title`.

Поле `title` используется клиентским приложением для отображения платёжных данных (обычно это замаскированные сведения о банковской карте). Значение `credentials` служит для формирования конструктора [inputPaymentCredentials](/constructor/inputPaymentCredentials/). При желании можно выставить флаг `save`, чтобы сохранить данные карты для дальнейшего использования, — но только если включена [двухфакторная аутентификация](/api/srp/).

Telegram **не** имеет доступа к данным вашей карты. Реквизиты банковской карты обрабатываются исключительно платёжной системой.

#### 3.3 Нативная оплата

```
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;

payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
```

Большинство приложений Telegram умеют работать напрямую с нативными API некоторых платёжных провайдеров, не открывая сайт платёжной системы и не получая JS-событие.

Для этого служит поле параметров `native_params` конструктора [payments.paymentForm](/constructor/payments.paymentForm/) в формате JSON: оно содержит объект, в котором может быть одно или несколько следующих полей:

-   `publishable_key`: публикуемый ключ API Stripe
-   `apple_pay_merchant_id`: идентификатор продавца Apple Pay
-   `android_pay_public_key`: открытый ключ Android Pay
-   `android_pay_bgcolor`: цвет фона формы Android Pay
-   `android_pay_inverse`: использовать ли тёмную тему в форме Android Pay
-   `need_country`: True, если требуется указать страну пользователя,
-   `need_zip`: True, если требуется указать почтовый индекс пользователя,
-   `need_cardholder_name`: True, если требуется указать имя держателя карты

Платёжный шлюз, который следует использовать, определяется значением поля `native_provider`.

##### 3.3.1 Stripe

```
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;

payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
```

Если поле `native_provider` задано и равно `stripe`, клиент может воспользоваться [нативными API токенов Stripe](https://stripe.com/docs/api/tokens/object) с ключом `publishable_key` из `native_params`, чтобы добавить способ оплаты в Stripe, а затем по полям токена `type` и `id` сформировать JSON-объект:

```
{"type":"token.type", "id":"token.id"}"
```

Полученный JSON-объект затем передаётся в поле `data` конструктора [inputPaymentCredentials](/constructor/inputPaymentCredentials/). При желании можно выставить флаг `save`, чтобы сохранить данные карты для дальнейшего использования, — но только если включена [двухфакторная аутентификация](/api/srp/).

Telegram **не** имеет доступа к данным вашей карты. Реквизиты банковской карты обрабатываются исключительно платёжной системой.

Пример реализации: [Telegram для Android](https://github.com/DrKLO/Telegram).

#### 3.4 Apple pay

```
inputPaymentCredentialsApplePay#0aa1c39f payment_data:DataJSON = InputPaymentCredentials;
```

На устройствах iOS для формирования платёжных данных можно использовать Apple Pay; полученные данные отправляются с помощью конструктора [inputPaymentCredentialsApplePay](/constructor/inputPaymentCredentialsApplePay/).

Пример реализации: [Telegram для iOS](https://github.com/TelegramMessenger/Telegram-iOS/).

#### 3.5 Android pay

```
inputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;
```

На устройствах Android для формирования платёжных данных можно использовать Google Pay; полученные данные отправляются с помощью конструктора [inputPaymentCredentialsGooglePay](/constructor/inputPaymentCredentialsApplePay/).

Пример реализации: [Telegram для Android](https://github.com/DrKLO/Telegram/blob/68d51749c4fcbaffa584829f23936565df55e08b/TMessagesProj/src/main/java/org/telegram/ui/PaymentFormActivity.java).

#### 3.6 Использование сохранённых платёжных данных

```
inputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;

paymentSavedCredentialsCard#cdc27a1f id:string title:string = PaymentSavedCredentials;

payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;

account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;

---functions---

account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

Для повторного использования сохранённых способов оплаты служит поле `saved_credentials` [платёжной формы](/constructor/payments.paymentForm/). Поле `title` конструктора [paymentSavedCredentialsCard](/constructor/paymentSavedCredentialsCard/) можно показать пользователю как замаскированные сведения о банковской карте. Поле `id` передаётся платёжным провайдером напрямую на серверы Telegram в момент сохранения способа оплаты и служит его идентификатором. Полные данные банковской карты на серверах Telegram **не** сохраняются, и пользователь не может их запросить.

Чтобы **воспользоваться** сохранённым способом оплаты, должна быть включена [двухфакторная аутентификация](/api/srp/): пользователь обязан подтвердить свою личность, введя пароль [2FA](/api/srp/), который затем, как описано в [документации по SRP](/api/srp/), используется для вычисления параметров SRP — их нужно передать в [account.getTmpPassword](/method/account.getTmpPassword/).

[@term:tmp_password] Полученный временный пароль (`tmp_password` — короткоживущий токен, подтверждающий, что пользователь только что ввёл пароль 2FA) затем позволяет проводить платежи по сохранённым реквизитам с помощью конструктора [inputPaymentCredentialsSaved](/constructor/inputPaymentCredentialsSaved/).

-   Поле `id` — это `id` из [paymentSavedCredentialsCard](/constructor/paymentSavedCredentialsCard/).
-   Поле `tmp_password` — временный платёжный пароль, сгенерированный сервером, если пользователь ввёл верный [пароль 2FA](/api/srp/).

Пример реализации: [Telegram для Android](https://github.com/DrKLO/Telegram).

### 4\. Предварительная проверка заказа

```
inputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsApplePay#0aa1c39f payment_data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;

payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;

---functions---

payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;

payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

После [проверки сведений о заказе](#23-verifying-information) клиенту остаётся последний шаг — вызвать [payments.sendPaymentForm](/method/payments.sendPaymentForm/) либо, для [платежей с помощью Telegram Stars »](#31-star-payment), [payments.sendStarsForm](/method/payments.sendStarsForm/) со следующими параметрами:

-   В `form_id` передаётся идентификатор формы
-   В `invoice` передаётся ранее переданный счёт
-   В `requested_info_id` передаётся `id` [проверенных сведений о заказе](#23-verifying-information), если они запрашивались
-   В `shipping_option_id` передаётся [выбранный вариант доставки](#24-select-delivery-option), если доставка запрашивалась.
-   `credentials` — платёжные реквизиты, сформированные платёжным провайдером и необходимые для оформления заказа.

Данные способа оплаты можно также сохранить на серверах Telegram и использовать повторно: для этого при отправке формы выставляется флаг `save` конструктора [inputPaymentCredentials](/constructor/inputPaymentCredentials/). Это возможно только для аккаунтов с включённой [двухфакторной аутентификацией](/api/srp/).

Затем бот [отвечает на полученный запрос предварительной проверки](#41-receiving-pre-checkout-query), и наконец пользователь [переходит к оформлению заказа](#5-checkout).

Обратите внимание: если метод вернул [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/), то перед [переходом к оформлению заказа](#5-checkout) платёжный провайдер требует, чтобы пользователь подтвердил свою личность — открыл переданный `url` и выполнил указанные там инструкции (например, прошёл 3-D Secure).  
Как только пользователь завершит работу с этой веб-страницей, клиент может [переходить к оформлению заказа](#5-checkout).

Возможные ошибки возвращаются в виде RPC-ошибок (`rpc_error`), а описание ошибки от бота приходит отдельно, в дополнительных [сервисных обновлениях](/constructor/updateServiceNotification/); подробности см. [здесь](/api/errors/#406-not-acceptable).

Учтите, что ошибки платежа не будут доставлены клиенту по MTProto, если они возникают на этапе дополнительной проверки (когда возвращён [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/), а пользователь не прошёл проверку TOTP): такие ошибки отображаются только внутри веб-представления проверки, никаких обновлений MTProto или RPC-ошибок (`rpc_error`) клиент не получит.

#### 4.1 Получение запроса предварительной проверки

```
paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;

updateBotPrecheckoutQuery#8caa9a96 flags:# query_id:long user_id:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string currency:string total_amount:long = Update;

---functions---

messages.setBotPrecheckoutResults#09c2dd95 flags:# success:flags.1?true query_id:long error:flags.0?string = Bool;
```

Пользователь вводит платёжные данные, как описано выше, и нажимает финальную кнопку оплаты. В этот момент Telegram API отправляет боту конструктор [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/), который содержит все доступные сведения о заказе. Бот обязан ответить методом [messages.setBotPrecheckoutResults](/method/messages.setBotPrecheckoutResults/) **в течение 10 секунд** после получения этого обновления, иначе транзакция будет отменена.

Бот может вернуть ошибку, если по какой-либо причине не в состоянии обработать заказ. Мы настоятельно рекомендуем указывать причину отказа в понятном человеку виде (например: «Извините, резиновые уточки закончились! Может быть, вас заинтересует стальной медведь?»). Telegram покажет эту причину пользователю.

### 5\. Завершение оплаты

```
keyboardButtonBuy#3fa53905 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;

keyboardButtonRow#77608b83 buttons:Vector<KeyboardButton> = KeyboardButtonRow;
replyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;

messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;

payments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;

payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;

---functions---

payments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;
```

Если бот подтверждает заказ, Telegram просит платёжного провайдера завершить транзакцию. Если платёжные данные были введены верно и платёж прошёл, Telegram API изменит сообщение со счётом и отправит сервисное сообщение, как описано ниже. Получив это сообщение, ваш бот должен приступить к передаче товаров или услуг, купленных пользователем.

Если всё в порядке, пользователь получает [payments.paymentResult](/constructor/payments.paymentResult/) в ответ на запрос [payments.sendPaymentForm](/method/payments.sendPaymentForm/); в нём содержатся сведения об обновлённом сообщении со счётом в виде [updateEditMessage](/constructor/updateEditMessage/).

[@term:receipt_msg_id] Сообщение со счётом будет обновлено следующим образом: у вложенного [messageMediaInvoice](/constructor/messageMediaInvoice/) появится поле `receipt_msg_id` (идентификатор сообщения с чеком). Клиентам следует считать сообщения со счётом, у которых есть поле `receipt_msg_id`, сообщениями-чеками и **локально** менять надпись на кнопке [keyboardButtonBuy](/constructor/keyboardButtonBuy/) на локализованный вариант слова `Receipt`. С этого момента нажатие на кнопку `Receipt` должно приводить к вызову [payments.getPaymentReceipt](/method/payments.getPaymentReceipt/), где в поле `msg_id` передаётся значение `receipt_msg_id`; метод вернёт сведения о транзакции.

Кроме того, платёж порождает одно сервисное сообщение типа [messageActionPaymentSent](/constructor/messageActionPaymentSent/) или [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/), отправленное в ответ на счёт. Для ботов это будет сообщение типа [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/), для пользователей — [messageActionPaymentSent](/constructor/messageActionPaymentSent/).  
Флаг `recurring_init` будет установлен, если этот платёж заодно открывает возможность будущих регулярных платежей.  
Последующие регулярные платежи будут автоматически отправлять сообщения [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) и [messageActionPaymentSent](/constructor/messageActionPaymentSent/) с установленным флагом `recurring_used`.

```
messageActionPaymentSentMe#ffa00ccc flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge subscription_until_date:flags.4?int = MessageAction;
messageActionPaymentSent#c624b16e flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long invoice_slug:flags.0?string subscription_until_date:flags.4?int = MessageAction;
```

### 6\. Возвраты средств

```
paymentCharge#ea02c27e id:string provider_charge_id:string = PaymentCharge;

messageActionPaymentSentMe#ffa00ccc flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge subscription_until_date:flags.4?int = MessageAction;

messageActionPaymentRefunded#41b3e202 flags:# peer:Peer currency:string total_amount:long payload:flags.0?bytes charge:PaymentCharge = MessageAction;

---functions---

payments.refundStarsCharge#25ae8f4a user_id:InputUser charge_id:string = Updates;
```

[@term:provider_charge_id] Платежи, совершённые с помощью [Telegram Stars »](/api/stars/), могут быть возвращены _пользователем или ботом, который их получил_: для этого вызывается [payments.refundStarsCharge](/method/payments.refundStarsCharge/), где в `user_id` передаётся идентификатор пользователя, совершившего платёж, а в `charge_id` — значение `provider_charge_id` (идентификатор списания на стороне платёжного провайдера) из действия сервисного сообщения [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) о входящем платеже.

В результате будет отправлено сервисное сообщение [messageActionPaymentRefunded](/constructor/messageActionPaymentRefunded/).
