---
title: "payments.exportInvoice"
original: "https://core.telegram.org/method/payments.exportInvoice"
section: ref
description: "Generate an invoice deep link"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.exportInvoice","url":"/method/payments.exportInvoice/"}]
layout: layout.njk
---

# payments.exportInvoice

Generate an [invoice deep link](/api/links/#invoice-links)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.exportedInvoice/">payments.exportedInvoice</a>#aed0cbd9 url:<a href="/type/string/">string</a> = <a href="/type/payments.ExportedInvoice/">payments.ExportedInvoice</a>;
---functions---
<a href="/method/payments.exportInvoice/" class="current_page_link">payments.exportInvoice</a>#f91b065 invoice_media:<a href="/type/InputMedia/">InputMedia</a> = <a href="/type/payments.ExportedInvoice/">payments.ExportedInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>invoice_media</strong></td><td style="text-align: center;"><a href="/type/InputMedia/">InputMedia</a></td><td>Invoice</td></tr></tbody></table>

### Result

[payments.ExportedInvoice](/type/payments.ExportedInvoice/)

### Only bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>CURRENCY_TOTAL_AMOUNT_INVALID</td><td>The total amount of all prices is invalid.</td></tr><tr><td>400</td><td>INVOICE_PAYLOAD_INVALID</td><td>The specified invoice payload is invalid.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Media invalid.</td></tr><tr><td>400</td><td>PAYMENT_PROVIDER_INVALID</td><td>The specified payment provider is invalid.</td></tr><tr><td>400</td><td>STARS_INVOICE_INVALID</td><td>The specified Telegram Star invoice is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>WEBDOCUMENT_MIME_INVALID</td><td>Invalid webdocument mime type provided.</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_EMPTY</td><td>The passed web document URL is empty.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
