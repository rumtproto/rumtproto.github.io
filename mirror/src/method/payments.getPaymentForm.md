---
title: "payments.getPaymentForm"
original: "https://core.telegram.org/method/payments.getPaymentForm"
section: ref
description: "Bots can offer users interactive HTML5 web apps to completely replace any website."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getPaymentForm","url":"/method/payments.getPaymentForm/"}]
layout: layout.njk
---

# payments.getPaymentForm

Get a payment form

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentForm/">payments.paymentForm</a>#a0058751 flags:<a href="/type/%23/">#</a> can_save_credentials:flags.2?true password_missing:flags.3?true form_id:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> provider_id:<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> native_provider:flags.4?<a href="/type/string/">string</a> native_params:flags.4?<a href="/type/DataJSON/">DataJSON</a> additional_methods:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PaymentFormMethod/">PaymentFormMethod</a>&gt; saved_info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> saved_credentials:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PaymentSavedCredentials/">PaymentSavedCredentials</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentForm/">payments.PaymentForm</a>;
<a href="/constructor/payments.paymentFormStars/">payments.paymentFormStars</a>#7bf6b15c flags:<a href="/type/%23/">#</a> form_id:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.PaymentForm/">payments.PaymentForm</a>;
<a href="/constructor/payments.paymentFormStarGift/">payments.paymentFormStarGift</a>#b425cfe1 form_id:<a href="/type/long/">long</a> invoice:<a href="/type/Invoice/">Invoice</a> = <a href="/type/payments.PaymentForm/">payments.PaymentForm</a>;
---functions---
<a href="/method/payments.getPaymentForm/" class="current_page_link">payments.getPaymentForm</a>#37148dbb flags:<a href="/type/%23/">#</a> invoice:<a href="/type/InputInvoice/">InputInvoice</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/payments.PaymentForm/">payments.PaymentForm</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice/">InputInvoice</a></td><td>Invoice</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/DataJSON/">DataJSON</a></td><td><a href="/api/bots/webapps/#theme-parameters">Theme parameters »</a></td></tr></tbody></table>

### Result

[payments.PaymentForm](/type/payments.PaymentForm/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>API_GIFT_RESTRICTED_UPDATE_APP</td><td>Please update the app to access the gift API.</td></tr><tr><td>400</td><td>BOOST_PEER_INVALID</td><td>The specified <code>boost_peer</code> is invalid.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>BOT_INVOICE_INVALID</td><td>The specified invoice is invalid.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>GIFT_MONTHS_INVALID</td><td>The value passed in invoice.inputInvoicePremiumGiftStars.months is invalid.</td></tr><tr><td>400</td><td>GIFT_STARS_INVALID</td><td>The specified amount of stars is invalid.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>The specified invoice is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>MONTH_INVALID</td><td>The number of months specified in inputInvoicePremiumGiftStars.months is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>NO_PAYMENT_NEEDED</td><td>The upgrade/transfer of the specified gift was already paid for or is free.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PREMIUM_PURPOSE_INVALID</td><td>The specified InputStorePaymentPurpose is invalid.</td></tr><tr><td>400</td><td>SLUG_INVALID</td><td>The specified invoice slug is invalid.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_CONVERTED</td><td>The specified star gift was already converted to Stars.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_REFUNDED</td><td>The specified star gift was already refunded.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>The specified gift was already upgraded to a collectible gift.</td></tr><tr><td>406</td><td>STARGIFT_EXPORT_IN_PROGRESS</td><td>A gift export is in progress, a detailed and localized description for the error will be emitted via an <a href="/api/errors/#406-not-acceptable">updateServiceNotification as specified here&nbsp;»</a>.</td></tr><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr><tr><td>400</td><td>STARGIFT_MESSAGE_INVALID</td><td>The specified inputInvoiceStarGift.message is invalid.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>The specified gift was not found.</td></tr><tr><td>400</td><td>STARGIFT_NOT_OWNER</td><td>You're not the owner of the gift you trying to transfer.</td></tr><tr><td>400</td><td>STARGIFT_NOT_UNIQUE</td><td>You can't transfer a non-collectible gift.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>You cannot transfer or sell a gift owned by another user.</td></tr><tr><td>400</td><td>STARGIFT_PEER_INVALID</td><td>The specified inputSavedStarGiftChat.peer is invalid.</td></tr><tr><td>400</td><td>STARGIFT_RESELL_CURRENCY_NOT_ALLOWED</td><td>You can't buy the gift using the specified currency (i.e. trying to pay in Stars for TON gifts).</td></tr><tr><td>400</td><td>STARGIFT_RESELL_TOO_EARLY_%d</td><td>You will be able to resell this gift in %d seconds.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr><tr><td>400</td><td>STARGIFT_TRANSFER_TOO_EARLY_%d</td><td>You cannot transfer this gift yet, wait %d seconds.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>A received gift can only be upgraded to a collectible gift if the <a href="/constructor/messageActionStarGift/">messageActionStarGift</a>/<a href="/constructor/savedStarGift/">savedStarGift</a>.<code>can_upgrade</code> flag is set.</td></tr><tr><td>406</td><td>STARS_FORM_AMOUNT_MISMATCH</td><td>The form amount has changed, please fetch the new form using <a href="/method/payments.getPaymentForm/">payments.getPaymentForm</a> and restart the process.</td></tr><tr><td>400</td><td>TO_ID_INVALID</td><td>The specified <code>to_id</code> of the passed inputInvoiceStarGiftResale or inputInvoiceStarGiftTransfer is invalid.</td></tr><tr><td>400</td><td>UNTIL_DATE_INVALID</td><td>Invalid until date provided.</td></tr><tr><td>403</td><td>USER_DISALLOWED_STARGIFTS</td><td>The recipient user has configured restrictions on which categories of star gifts they're willing to accept (unique, limited, or unlimited): the sender attempted to get a payment form for a gift that falls into a category the recipient has blocked.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Error handling](/api/errors/)

How to handle API return errors correctly.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](/api/gifts/) owned by a peer.

#### [payments.getPaymentForm](/method/payments.getPaymentForm/)

Get a payment form
