---
title: "botInlineMessageMediaInvoice"
original: "https://core.telegram.org/constructor/botInlineMessageMediaInvoice"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botInlineMessageMediaInvoice","url":"/constructor/botInlineMessageMediaInvoice/"}]
layout: layout.njk
---

# botInlineMessageMediaInvoice

Send an invoice

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botInlineMessageMediaInvoice/" class="current_page_link">botInlineMessageMediaInvoice</a>#354a9b09 flags:<a href="/type/%23/">#</a> shipping_address_requested:flags.1?true test:flags.3?true title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.0?<a href="/type/WebDocument/">WebDocument</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> = <a href="/type/BotInlineMessage/">BotInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>shipping_address_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Set this flag if you require the user's shipping address to complete the order</td></tr><tr><td><strong>test</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Test invoice</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product name, 1-32 characters</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product description, 1-255 characters</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/WebDocument/">WebDocument</a></td><td>Product photo</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code, or <code>XTR</code> for <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>total_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Inline keyboard</td></tr></tbody></table>

### Type

[BotInlineMessage](/type/BotInlineMessage/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
