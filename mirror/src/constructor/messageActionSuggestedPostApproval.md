---
title: "messageActionSuggestedPostApproval"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostApproval"
section: ref
description: "A suggested post » was approved or rejected."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSuggestedPostApproval","url":"/constructor/messageActionSuggestedPostApproval/"}]
layout: layout.njk
---

# messageActionSuggestedPostApproval

A [suggested post »](/api/suggested-posts/) was approved or rejected.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSuggestedPostApproval/" class="current_page_link">messageActionSuggestedPostApproval</a>#ee7a1596 flags:<a href="/type/%23/">#</a> rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?<a href="/type/string/">string</a> schedule_date:flags.3?<a href="/type/int/">int</a> price:flags.4?<a href="/type/StarsAmount/">StarsAmount</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>rejected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the suggested post was rejected.</td></tr><tr><td><strong>balance_too_low</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the post was approved but the user's balance is too low to pay for the suggested post.</td></tr><tr><td><strong>reject_comment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If the suggested post was rejected, can optionally contain a rejection comment.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Scheduling date.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/StarsAmount/">StarsAmount</a></td><td>Price for the suggested post.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.
