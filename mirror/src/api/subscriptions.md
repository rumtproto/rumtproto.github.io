---
title: "Star subscriptions"
original: "https://core.telegram.org/api/subscriptions"
section: api
description: "Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services."
crumbs: [{"title":"API","url":"/api/"},{"title":"Star subscriptions","url":"/api/subscriptions/"}]
layout: layout.njk
---

# Star subscriptions

Bots and channels may create subscriptions, periodically charging users a certain amount of [Telegram Stars](/api/stars/) in exchange for content and services.

### Channel subscriptions

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

Channel administrators can create special invite links that allow joining a channel in exchange for a monthly payment in Telegram Stars.

Subscribing to a channel using a paid invite link will transfer Telegram Stars to the channel's balance.

To create such links, invoke [messages.exportChatInvite](/method/messages.exportChatInvite/) passing a [starsSubscriptionPricing](/constructor/starsSubscriptionPricing/) constructor to `subscription_pricing`, passing in `peer` the **private channel** we wish to sell access to, and in `amount` the amount of Telegram Stars users should pay every `period` seconds to gain and maintain access to the channel.  
Currently the only allowed subscription period is `30*24*60*60`, i.e. the user will be automatically debited `amount` stars every month, and the maximum allowed `amount` is specified in the [`stars_subscription_amount_max` config key »](/api/config/#stars-subscription-amount-max).

Users obtaining info about the invitation link using [messages.checkChatInvite](/method/messages.checkChatInvite/) will obtain a [chatInvite](/constructor/chatInvite/) constructor with the `subscription_pricing` and `subscription_form_id` flags set.

To pay for the subscription, follow the [usual payment flow »](/api/payments/), with the following variation: since subscriptions already have a pre-generated form contained in the `subscription_form_id` returned in [chatInvite](/constructor/chatInvite/), the first two steps of the [payment flow »](/api/payments/) (those used to generate a payment form) must be skipped, starting directly at the [payments.sendStarsForm](/method/payments.sendStarsForm/) call in [step 3 »](/api/payments/#3-payment), passing to `invoice` an [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/) with the `hash` component of the [invite link](/api/links/#message-links), and to `form_id` the [chatInvite](/constructor/chatInvite/).`subscription_form_id`.

Once the payment is successfully completed, the user will be automatically added to the channel, without having to invoke [messages.importChatInvite](/method/messages.importChatInvite/) to join the private channel.

The end date of the current subscription period will be contained in [channel](/constructor/channel/).`subscription_until_date` and [starsSubscription](/constructor/starsSubscription/).`until_date`.

The subscription will be automatically renewed at `subscription_until_date`, removing `amount` stars from the user's Star balance and pushing forward the subscription's `subscription_until_date` by `period` seconds.

If the user decides to leave the channel without cancelling the subscription (or before the end of the current cancelled subscription period), subsequent calls to [messages.checkChatInvite](/method/messages.checkChatInvite/) will return a [chatInvite](/constructor/chatInvite/) with the `can_refulfill_subscription` flag set, indicating that they may re-join the channel using [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/) (passing [inputPeerSelf](/constructor/inputPeerSelf/) to `peer` and the [starsSubscription](/constructor/starsSubscription/).`id` to `subscription_id`; alternatively, [messages.importChatInvite](/method/messages.importChatInvite/) may simply be used) without repeating the payment; the `subscription_pricing` will also be returned, but no `subscription_form_id` will be returned.

Admins may also use [messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) with the `subscription_expired` flag set to fetch only and all users with an expired subscription.

Channel admins can also see the end date of the current subscription period for any user in [channelParticipant](/constructor/channelParticipant/).`subscription_until_date`.

See [here »](#managing-subscriptions) for more info on how to handle active subscriptions as a subscriber.

### Bot subscriptions

```
invoice#049ee584 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string subscription_period:flags.11?int = Invoice;

starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;

---functions---

messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

payments.botCancelStarsSubscription#6dfa0622 flags:# restore:flags.0?true user_id:InputUser charge_id:string = Bool;
```

To create (and subscribe to) a bot subscription, start by following the [invoicing link flow »](/api/payments/#1-2-create-invoice-link), specifying:

-   A price for the subscription in Telegram Stars (currency code `XTR`) not greater than the value specified in [`stars_subscription_amount_max` config key »](/api/config/#stars-subscription-amount-max)
-   The subscription period in seconds in the `subscription_period` flag of the [invoice](/constructor/invoice/): currently the only allowed subscription period is `30*24*60*60`, i.e. the user will be automatically debited the specified amount of stars every month.

**Note**: subscription invoices may not be sent using [messages.sendMedia](/method/messages.sendMedia/), only exported to [invoice deep links](/api/links/#invoice-links) using [payments.exportInvoice](/method/payments.exportInvoice/).

Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions for the same user.

To subscribe to a bot subscription, simply proceed with the payment of the invoice [as specified here »](/api/payments/#3-payment).

The subscription will be automatically renewed every `subscription_period` seconds, removing `amount` stars from the user's Star balance and pushing forward the subscription's end date by `period` seconds.

The subscription may be cancelled by the bot using [payments.botCancelStarsSubscription](/method/payments.botCancelStarsSubscription/), passing the following parameters:

-   `restore`: If **not** set, disables auto-renewal of the subscriptions, and prevents the user from reactivating the subscription once the current period expires: a subscription cancelled by the bot will have the [starsSubscription](/constructor/starsSubscription/).`bot_canceled` flag set.  
    The bot can partially undo this operation by setting this flag: this will allow the user to reactivate the subscription.
-   `user_id`: Pass here the ID of the user whose subscription should be (un)cancelled
-   `charge_id`: Pass here the `provider_charge_id` from the [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) service message sent to the bot for the first subscription payment.

See [here »](#managing-subscriptions) for more info on how to handle active subscriptions as a subscriber: the [starsSubscription](/constructor/starsSubscription/) constructor associated with bot subscriptions will have the `invoice_slug` flag set.

### Managing subscriptions

```
starsSubscriptionPricing#05416d58 period:int amount:long = StarsSubscriptionPricing;

starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;

payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

---functions---

payments.getStarsSubscriptions#032512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
payments.changeStarsSubscription#c7770878 flags:# peer:InputPeer subscription_id:string canceled:flags.0?Bool = Bool;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
```

To obtain a list of all active and cancelled subscriptions invoke [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/), passing [inputPeerSelf](/constructor/inputPeerSelf/) to `peer`: this will return a vector of [starsSubscription](/constructor/starsSubscription/) constructors, containing info about each subscription.

To cancel an active subscription, invoke [payments.changeStarsSubscription](/method/payments.changeStarsSubscription/) passing [inputPeerSelf](/constructor/inputPeerSelf/) to `peer`, the [starsSubscription](/constructor/starsSubscription/).`id` to `subscription_id` and [boolTrue](/constructor/boolTrue/) to `canceled`; to resubscribe, invoke the same method passing [boolFalse](/constructor/boolFalse/) to `canceled`.

When we get close to the end of the subscription period of one or more active subscriptions, and the current Telegram Star balance is not high enough to auto-renew at least one of them, the ["STARS\_SUBSCRIPTION\_LOW\_BALANCE" suggestion »](/api/config/#suggestions) will be activated: when the user clicks on the suggestion, the client should fetch and display the list of expiring subscriptions by invoking [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/), passing [inputPeerSelf](/constructor/inputPeerSelf/) to `peer` and setting the `missing_balance` flag: the returned subscriptions may be renewed by [filling up the current Telegram Star balance](/api/stars/) with at least [payments.starsStatus](/constructor/payments.starsStatus/).`subscriptions_missing_balance` stars.

[payments.getStarsTransactions](/method/payments.getStarsTransactions/) may be used to fetch only and all transactions for a specific subscription by populating the `subscription_id` flag.
