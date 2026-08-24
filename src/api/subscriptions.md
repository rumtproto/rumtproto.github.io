---
title: "Подписки за звёзды"
original: "https://core.telegram.org/api/subscriptions"
section: api
description: "Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги."
layout: layout.njk
---

# Подписки за звёзды

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество [Telegram Stars](/api/stars/) в обмен на контент и услуги.

### Подписки на каналы

```
starsSubscriptionPricing#05416d58 period:int amount:long = StarsSubscriptionPricing;

chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;

inputInvoiceChatInviteSubscription#34e793f1 hash:string = InputInvoice;

starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;

---functions---

messages.exportChatInvite#a455de90 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string subscription_pricing:flags.5?StarsSubscriptionPricing = ExportedChatInvite;

messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;

messages.importChatInvite#6c50051c hash:string = Updates;
payments.fulfillStarsSubscription#cc5bebb3 peer:InputPeer subscription_id:string = Bool;

messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;
```

Администраторы канала могут создавать особые пригласительные ссылки, которые позволяют вступить в канал в обмен на ежемесячную оплату в Telegram Stars.

Подписка на канал по платной пригласительной ссылке переводит Telegram Stars на баланс канала.

[@term:peer] Чтобы создать такую ссылку, вызовите [messages.exportChatInvite](/method/messages.exportChatInvite/), передав в `subscription_pricing` конструктор [starsSubscriptionPricing](/constructor/starsSubscriptionPricing/), в `peer` (пир — адресат запроса: пользователь, чат или канал) — **закрытый канал**, доступ к которому мы хотим продавать, а в `amount` — количество Telegram Stars, которое пользователь должен платить каждые `period` секунд, чтобы получить доступ к каналу и сохранять его.  
Сейчас единственный допустимый период подписки — `30*24*60*60`, то есть с пользователя ежемесячно будет автоматически списываться `amount` звёзд, а максимально допустимое значение `amount` задаётся [ключом конфигурации `stars_subscription_amount_max` »](/api/config/#stars-subscription-amount-max).

Пользователи, запрашивающие сведения о пригласительной ссылке через [messages.checkChatInvite](/method/messages.checkChatInvite/), получат конструктор [chatInvite](/constructor/chatInvite/) с установленными флагами `subscription_pricing` и `subscription_form_id`.

Оплата подписки выполняется по [обычной схеме платежа »](/api/payments/) со следующим отличием: поскольку у подписок уже есть заранее сформированная форма, идентификатор которой возвращается в `subscription_form_id` конструктора [chatInvite](/constructor/chatInvite/), первые два шага [схемы платежа »](/api/payments/) (те, что нужны для создания платёжной формы) обязательно пропускаются, и всё начинается сразу с вызова [payments.sendStarsForm](/method/payments.sendStarsForm/) на [шаге 3 »](/api/payments/#3-payment), передав в `invoice` конструктор [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/) с компонентом `hash` из [пригласительной ссылки](/api/links/#message-links), а в `form_id` — [chatInvite](/constructor/chatInvite/).`subscription_form_id`.

После успешной оплаты пользователь будет автоматически добавлен в канал: вызывать [messages.importChatInvite](/method/messages.importChatInvite/), чтобы вступить в закрытый канал, не требуется.

Дата окончания текущего периода подписки содержится в [channel](/constructor/channel/).`subscription_until_date` и [starsSubscription](/constructor/starsSubscription/).`until_date`.

Подписка автоматически продлевается в момент `subscription_until_date`: со звёздного баланса пользователя списывается `amount` звёзд, а `subscription_until_date` сдвигается вперёд на `period` секунд.

Если пользователь решит покинуть канал, не отменив подписку (либо до окончания текущего периода уже отменённой подписки), последующие вызовы [messages.checkChatInvite](/method/messages.checkChatInvite/) будут возвращать [chatInvite](/constructor/chatInvite/) с установленным флагом `can_refulfill_subscription`. Это означает, что пользователь может вернуться в канал через [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/) (передав в `peer` конструктор [inputPeerSelf](/constructor/inputPeerSelf/), а в `subscription_id` — [starsSubscription](/constructor/starsSubscription/).`id`; либо можно просто воспользоваться [messages.importChatInvite](/method/messages.importChatInvite/)) без повторной оплаты; при этом `subscription_pricing` также будет возвращён, а `subscription_form_id` — нет.

Администраторы могут также вызвать [messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) с установленным флагом `subscription_expired`, чтобы получить всех пользователей с истёкшей подпиской и только их.

Администраторы канала также видят дату окончания текущего периода подписки любого пользователя — в [channelParticipant](/constructor/channelParticipant/).`subscription_until_date`.

Подробнее о том, как подписчику работать с активными подписками, см. [здесь »](#managing-subscriptions).

### Подписки на ботов

```
invoice#049ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;

starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;

---functions---

messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

payments.botCancelStarsSubscription#6dfa0622 flags:# restore:flags.0?true user_id:InputUser charge_id:string = Bool;
```

Чтобы создать подписку на бота (и оформить её), начните с [процедуры создания ссылки на счёт »](https://core.telegram.org/api/payments#12-create-invoice-link), указав:

-   Стоимость подписки в Telegram Stars (код валюты `XTR`), не превышающую значение из [ключа конфигурации `stars_subscription_amount_max` »](/api/config/#stars-subscription-amount-max)
-   Период подписки в секундах во флаге `subscription_period` конструктора [invoice](/constructor/invoice/): в настоящее время единственный допустимый период подписки — `30*24*60*60`, то есть указанная сумма звёзд будет списываться с пользователя автоматически каждый месяц.

[@term:deep link] **Примечание**: счета на подписку нельзя отправлять через [messages.sendMedia](/method/messages.sendMedia/) — их можно только экспортировать в [глубокие ссылки на счёт](/api/links/#invoice-links) (`deep link` — ссылка вида `t.me/…`, которая открывается прямо в клиенте Telegram) с помощью [payments.exportInvoice](/method/payments.exportInvoice/).

У одного бота может быть одновременно активно любое количество подписок, в том числе несколько одновременных подписок у одного и того же пользователя.

Чтобы оформить подписку на бота, просто выполните оплату счёта [так, как описано здесь »](/api/payments/#3-payment).

Подписка будет автоматически продлеваться каждые `subscription_period` секунд: со звёздного баланса пользователя списывается `amount` звёзд, а дата окончания подписки сдвигается вперёд на `period` секунд.

[@note] В этом абзаце оригинала соседствуют два имени: `subscription_period` — поле конструктора `invoice`, и `period` — поле конструктора `starsSubscriptionPricing`. Речь об одной и той же длительности, просто приходит она из разных конструкторов; сейчас оба значения равны `30*24*60*60`.

Бот может отменить подписку методом [payments.botCancelStarsSubscription](/method/payments.botCancelStarsSubscription/), передав следующие параметры:

-   `restore`: если флаг **не** установлен, автопродление подписки отключается, а пользователь лишается возможности возобновить подписку после истечения текущего периода: у отменённой ботом подписки будет установлен флаг [starsSubscription](/constructor/starsSubscription/).`bot_canceled`.  
    Бот может частично обратить эту операцию, установив этот флаг: тогда пользователь снова сможет возобновить подписку.
-   `user_id`: передайте здесь ID пользователя, чью подписку нужно отменить или чью отмену нужно снять
-   `charge_id`: передайте здесь `provider_charge_id` из сервисного сообщения [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/), отправленного боту при первой оплате подписки.

Подробнее о работе с активными подписками со стороны подписчика см. [здесь »](#managing-subscriptions): у конструктора [starsSubscription](/constructor/starsSubscription/), связанного с подписками на ботов, будет установлен флаг `invoice_slug`.

### Управление подписками

```
starsSubscriptionPricing#05416d58 period:int amount:long = StarsSubscriptionPricing;

starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;

payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

---functions---

payments.getStarsSubscriptions#032512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
payments.changeStarsSubscription#c7770878 flags:# peer:InputPeer subscription_id:string canceled:flags.0?Bool = Bool;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
```

Чтобы получить список всех активных и отменённых подписок, вызовите [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/), передав [inputPeerSelf](/constructor/inputPeerSelf/) в `peer`: метод вернёт вектор конструкторов [starsSubscription](/constructor/starsSubscription/) со сведениями о каждой подписке.

Чтобы отменить активную подписку, вызовите [payments.changeStarsSubscription](/method/payments.changeStarsSubscription/), передав [inputPeerSelf](/constructor/inputPeerSelf/) в `peer`, значение [starsSubscription](/constructor/starsSubscription/).`id` в `subscription_id` и [boolTrue](/constructor/boolTrue/) в `canceled`; чтобы возобновить подписку, вызовите тот же метод, передав [boolFalse](/constructor/boolFalse/) в `canceled`.

Когда до конца периода одной или нескольких активных подписок остаётся немного, а текущего баланса Telegram Stars не хватает на автопродление хотя бы одной из них, активируется [подсказка «STARS\_SUBSCRIPTION\_LOW\_BALANCE» »](/api/config/#suggestions): при нажатии пользователем на эту подсказку клиенту следует запросить и показать список истекающих подписок, вызвав [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/) с [inputPeerSelf](/constructor/inputPeerSelf/) в `peer` и установленным флагом `missing_balance`: возвращённые подписки можно продлить, [пополнив текущий баланс Telegram Stars](/api/stars/) как минимум на [payments.starsStatus](/constructor/payments.starsStatus/).`subscriptions_missing_balance` звёзд.

[payments.getStarsTransactions](/method/payments.getStarsTransactions/) позволяет получить все транзакции конкретной подписки и только их — для этого нужно заполнить флаг `subscription_id`.
