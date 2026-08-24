---
title: "inputBotInlineMessageMediaInvoice"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaInvoice"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineMessageMediaInvoice","url":"/constructor/inputBotInlineMessageMediaInvoice/"}]
layout: layout.njk
---

# inputBotInlineMessageMediaInvoice

An invoice

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineMessageMediaInvoice/" class="current_page_link">inputBotInlineMessageMediaInvoice</a>#d7e78225 flags:<a href="/type/%23/">#</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.0?<a href="/type/InputWebDocument/">InputWebDocument</a> invoice:<a href="/type/Invoice/">Invoice</a> payload:<a href="/type/bytes/">bytes</a> provider:<a href="/type/string/">string</a> provider_data:<a href="/type/DataJSON/">DataJSON</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> = <a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product name, 1-32 characters</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Product description, 1-255 characters</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputWebDocument/">InputWebDocument</a></td><td>Invoice photo</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice/">Invoice</a></td><td>The invoice</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Payments provider token, obtained via <a href="https://t.me/botfather">Botfather</a></td></tr><tr><td><strong>provider_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Inline keyboard</td></tr></tbody></table>

### Type

[InputBotInlineMessage](/type/InputBotInlineMessage/)
