---
title: "starsSubscriptionPricing"
original: "https://core.telegram.org/constructor/starsSubscriptionPricing"
section: ref
description: "Pricing of a Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsSubscriptionPricing","url":"/constructor/starsSubscriptionPricing/"}]
layout: layout.njk
---

# starsSubscriptionPricing

Pricing of a [Telegram Star subscription »](/api/invites/#paid-invite-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsSubscriptionPricing/" class="current_page_link">starsSubscriptionPricing</a>#5416d58 period:<a href="/type/int/">int</a> amount:<a href="/type/long/">long</a> = <a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The user should pay <code>amount</code> stars every <code>period</code> seconds to gain and maintain access to the channel.<br>Currently the only allowed subscription period is <code>30*24*60*60</code>, i.e. the user will be debited amount stars every month.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the subscription in Telegram Stars.</td></tr></tbody></table>

### Type

[StarsSubscriptionPricing](/type/StarsSubscriptionPricing/)

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
