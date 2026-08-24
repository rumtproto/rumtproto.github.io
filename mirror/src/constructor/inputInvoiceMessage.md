---
title: "inputInvoiceMessage"
original: "https://core.telegram.org/constructor/inputInvoiceMessage"
section: ref
description: "An invoice contained in a messageMediaInvoice message or paid media »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceMessage","url":"/constructor/inputInvoiceMessage/"}]
layout: layout.njk
---

# inputInvoiceMessage

An invoice contained in a [messageMediaInvoice](/constructor/messageMediaInvoice/) message or [paid media »](/api/paid-media/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceMessage/" class="current_page_link">inputInvoiceMessage</a>#c5b56859 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat where the invoice/paid media was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [messageMediaInvoice](/constructor/messageMediaInvoice/)

Invoice

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
