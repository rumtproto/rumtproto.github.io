---
title: "requirementToContactPaidMessages"
original: "https://core.telegram.org/constructor/requirementToContactPaidMessages"
section: ref
description: "This user requires us to pay the specified amount of Telegram Stars to send them a message, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"requirementToContactPaidMessages","url":"/constructor/requirementToContactPaidMessages/"}]
layout: layout.njk
---

# requirementToContactPaidMessages

This user requires us to pay the specified amount of [Telegram Stars](/api/stars/) to send them a message, see [here »](/api/paid-messages/) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requirementToContactPaidMessages/" class="current_page_link">requirementToContactPaidMessages</a>#b4f67e93 stars_amount:<a href="/type/long/">long</a> = <a href="/type/RequirementToContact/">RequirementToContact</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The required amount of <a href="/api/stars/">Telegram Stars</a>.</td></tr></tbody></table>

### Type

[RequirementToContact](/type/RequirementToContact/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
