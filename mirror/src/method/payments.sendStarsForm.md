---
title: "payments.sendStarsForm"
original: "https://core.telegram.org/method/payments.sendStarsForm"
section: ref
description: "Make a payment using Telegram Stars, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.sendStarsForm","url":"/method/payments.sendStarsForm/"}]
layout: layout.njk
---

# payments.sendStarsForm

Make a payment using [Telegram Stars, see here »](/api/stars/#using-stars) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.paymentResult/">payments.paymentResult</a>#4e5f810d updates:<a href="/type/Updates/">Updates</a> = <a href="/type/payments.PaymentResult/">payments.PaymentResult</a>;
<a href="/constructor/payments.paymentVerificationNeeded/">payments.paymentVerificationNeeded</a>#d8411139 url:<a href="/type/string/">string</a> = <a href="/type/payments.PaymentResult/">payments.PaymentResult</a>;
---functions---
<a href="/method/payments.sendStarsForm/" class="current_page_link">payments.sendStarsForm</a>#7998c914 form_id:<a href="/type/long/">long</a> invoice:<a href="/type/InputInvoice/">InputInvoice</a> = <a href="/type/payments.PaymentResult/">payments.PaymentResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Payment form ID</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice/">InputInvoice</a></td><td>Invoice</td></tr></tbody></table>

### Result

[payments.PaymentResult](/type/payments.PaymentResult/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>API_GIFT_RESTRICTED_UPDATE_APP</td><td>Please update the app to access the gift API.</td></tr><tr><td>400</td><td>BALANCE_TOO_LOW</td><td>The transaction cannot be completed because the current <a href="/api/stars/">Telegram Stars balance</a> is too low.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>BOT_INVOICE_INVALID</td><td>The specified invoice is invalid.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>FORM_EXPIRED</td><td>The form was generated more than 10 minutes ago and has expired, please re-generate it using <a href="/method/payments.getPaymentForm/">payments.getPaymentForm</a> and pass the new <code>form_id</code>.</td></tr><tr><td>400</td><td>FORM_ID_EMPTY</td><td>The specified form ID is empty.</td></tr><tr><td>400</td><td>FORM_SUBMIT_DUPLICATE</td><td>The same payment form was already submitted. .</td></tr><tr><td>400</td><td>FORM_UNSUPPORTED</td><td>Please update your client.</td></tr><tr><td>400</td><td>GIFT_STARS_INVALID</td><td>The specified amount of stars is invalid.</td></tr><tr><td>400</td><td>MEDIA_ALREADY_PAID</td><td>You already paid for the specified media.</td></tr><tr><td>400</td><td>MONTH_INVALID</td><td>The number of months specified in inputInvoicePremiumGiftStars.months is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>406</td><td>PRECHECKOUT_FAILED</td><td>Precheckout failed, a detailed and localized description for the error will be emitted via an <a href="/api/errors/#406-not-acceptable">updateServiceNotification as specified here&nbsp;»</a>.</td></tr><tr><td>400</td><td>PURPOSE_INVALID</td><td>The specified payment purpose is invalid.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>The specified gift was already upgraded to a collectible gift.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>The specified gift was not found.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>You cannot transfer or sell a gift owned by another user.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr><tr><td>400</td><td>STARGIFT_USAGE_LIMITED</td><td>The gift is sold out.</td></tr><tr><td>400</td><td>STARGIFT_USER_USAGE_LIMITED</td><td>You've reached the starGift.limited_per_user limit, you can't buy any more gifts of this type.</td></tr><tr><td>406</td><td>STARS_FORM_AMOUNT_MISMATCH</td><td>The form amount has changed, please fetch the new form using <a href="/method/payments.getPaymentForm/">payments.getPaymentForm</a> and restart the process.</td></tr><tr><td>400</td><td>TO_ID_INVALID</td><td>The specified <code>to_id</code> of the passed inputInvoiceStarGiftResale or inputInvoiceStarGiftTransfer is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [payments.getPaymentForm](/method/payments.getPaymentForm/)

Get a payment form

#### [Error handling](/api/errors/)

How to handle API return errors correctly.
