---
title: "payments.getStarsRevenueWithdrawalUrl"
original: "https://core.telegram.org/method/payments.getStarsRevenueWithdrawalUrl"
section: ref
description: "Withdraw funds from a channel or bot's star balance »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsRevenueWithdrawalUrl","url":"/method/payments.getStarsRevenueWithdrawalUrl/"}]
layout: layout.njk
---

# payments.getStarsRevenueWithdrawalUrl

Withdraw funds from a channel or bot's [star balance »](/api/stars/#withdrawing-revenue).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsRevenueWithdrawalUrl/">payments.starsRevenueWithdrawalUrl</a>#1dab80b7 url:<a href="/type/string/">string</a> = <a href="/type/payments.StarsRevenueWithdrawalUrl/">payments.StarsRevenueWithdrawalUrl</a>;
---functions---
<a href="/method/payments.getStarsRevenueWithdrawalUrl/" class="current_page_link">payments.getStarsRevenueWithdrawalUrl</a>#2433dc92 flags:<a href="/type/%23/">#</a> ton:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> amount:flags.1?<a href="/type/long/">long</a> password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/payments.StarsRevenueWithdrawalUrl/">payments.StarsRevenueWithdrawalUrl</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, withdraws channel/ad revenue in TON.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Channel or bot from which to withdraw funds.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>The amount of stars or nanograms to withdraw.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>2FA password, see <a href="/api/srp/#using-the-2fa-password">here »</a> for more info.</td></tr></tbody></table>

### Result

[payments.StarsRevenueWithdrawalUrl](/type/payments.StarsRevenueWithdrawalUrl/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>You must <a href="/api/srp/">enable 2FA</a> before executing this operation.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>The password was modified less than 24 hours ago, try again in %d seconds.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>This session was created less than 24 hours ago, try again in %d seconds.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
