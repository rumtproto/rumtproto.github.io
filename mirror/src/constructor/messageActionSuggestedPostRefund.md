---
title: "messageActionSuggestedPostRefund"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostRefund"
section: ref
description: "A suggested post » was accepted and posted or scheduled, but either the channel deleted the posted/scheduled post before stars\\_suggested\\_post\\_age\\_min seconds have elapsed, or…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSuggestedPostRefund","url":"/constructor/messageActionSuggestedPostRefund/"}]
layout: layout.njk
---

# messageActionSuggestedPostRefund

A [suggested post »](/api/suggested-posts/) was accepted and posted or scheduled, but either the channel deleted the posted/scheduled post before [stars\_suggested\_post\_age\_min](/api/config/#stars-suggested-post-age-min) seconds have elapsed, or the user refunded the payment for the stars used to pay for the suggested post.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSuggestedPostRefund/" class="current_page_link">messageActionSuggestedPostRefund</a>#69f916f8 flags:<a href="/type/%23/">#</a> payer_initiated:flags.0?true = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>payer_initiated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the user refunded the payment for the stars used to pay for the suggested post.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
