---
title: "updateBotPurchasedPaidMedia"
original: "https://core.telegram.org/constructor/updateBotPurchasedPaidMedia"
section: ref
description: "Bots only: a user has purchased a paid media."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotPurchasedPaidMedia","url":"/constructor/updateBotPurchasedPaidMedia/"}]
layout: layout.njk
---

# updateBotPurchasedPaidMedia

Bots only: a user has purchased a [paid media](/api/paid-media/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotPurchasedPaidMedia/" class="current_page_link">updateBotPurchasedPaidMedia</a>#283bd312 user_id:<a href="/type/long/">long</a> payload:<a href="/type/string/">string</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user that bought the media</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Payload passed by the bot in <a href="/constructor/inputMediaPaidMedia/">inputMediaPaidMedia</a>.<code>payload</code></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/)

[Paid media, see here »](/api/paid-media/) for more info.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
