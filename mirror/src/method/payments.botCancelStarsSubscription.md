---
title: "payments.botCancelStarsSubscription"
original: "https://core.telegram.org/method/payments.botCancelStarsSubscription"
section: ref
description: "Cancel a bot subscription"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.botCancelStarsSubscription","url":"/method/payments.botCancelStarsSubscription/"}]
layout: layout.njk
---

# payments.botCancelStarsSubscription

Cancel a [bot subscription](/api/subscriptions/#bot-subscriptions)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.botCancelStarsSubscription/" class="current_page_link">payments.botCancelStarsSubscription</a>#6dfa0622 flags:<a href="/type/%23/">#</a> restore:flags.0?true user_id:<a href="/type/InputUser/">InputUser</a> charge_id:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If <strong>not</strong> set, disables autorenewal of the subscriptions, and prevents the user from reactivating the subscription once the current period expires: a subscription cancelled by the bot will have the <a href="/constructor/starsSubscription/">starsSubscription</a>.<code>bot_canceled</code> flag set.<br>The bot can can partially undo this operation by setting this flag: this will allow the user to reactivate the subscription.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The ID of the user whose subscription should be (un)cancelled</td></tr><tr><td><strong>charge_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The <code>provider_charge_id</code> from the <a href="/constructor/messageActionPaymentSentMe/">messageActionPaymentSentMe</a> service message sent to the bot for the first subscription payment.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHARGE_ID_INVALID</td><td>The specified charge_id is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [starsSubscription](/constructor/starsSubscription/)

Represents a [Telegram Star subscription »](/api/invites/#paid-invite-links).

#### [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/)

A user just sent a payment to me (a bot)

#### [Star subscriptions](/api/subscriptions/)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.
