---
title: "inputMediaInvoice"
original: "https://core.telegram.org/constructor/inputMediaInvoice"
section: ref
description: "Generated invoice of a bot payment"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaInvoice","url":"/constructor/inputMediaInvoice/"}]
layout: layout.njk
---

# inputMediaInvoice

Generated invoice of a [bot payment](/bots/payments/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaInvoice/" class="current_page_link">inputMediaInvoice</a>#405fef0d flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.0?<a href="/type/InputWebDocument/">InputWebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> payload:<a href="/type/bytes/">bytes</a> provider:flags.3?<a href="/type/string/">string</a> provider_data:<a href="/type/DataJSON/">DataJSON</a> start_param:flags.1?<a href="/type/string/">string</a> extended_media:flags.2?<a href="/type/InputMedia/">InputMedia</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product name, 1-32 characters</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product description, 1-255 characters</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputWebDocument/">InputWebDocument</a></td><td>URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice/">Invoice</a></td><td>The actual invoice</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Payments provider token, obtained via <a href="https://t.me/botfather">Botfather</a></td></tr><tr><td><strong>provider_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Unique <a href="/api/links/#bot-links">bot deep links start parameter</a>. If present, forwarded copies of the sent message will have a URL button with a <a href="/api/links/#bot-links">deep link</a> to the bot (instead of a Pay button), with the value used as the start parameter. If absent, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputMedia/">InputMedia</a></td><td>Deprecated</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Bot Payments API](/bots/payments/)
