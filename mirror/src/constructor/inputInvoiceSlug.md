---
title: "inputInvoiceSlug"
original: "https://core.telegram.org/constructor/inputInvoiceSlug"
section: ref
description: "An invoice slug taken from an invoice deep link or from the premium_invoice_slug app config parameter »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceSlug","url":"/constructor/inputInvoiceSlug/"}]
layout: layout.njk
---

# inputInvoiceSlug

An invoice slug taken from an [invoice deep link](/api/links/#invoice-links) or from the [`premium_invoice_slug` app config parameter »](/api/config/#premium-invoice-slug)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceSlug/" class="current_page_link">inputInvoiceSlug</a>#c326caef slug:<a href="/type/string/">string</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The invoice slug</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
