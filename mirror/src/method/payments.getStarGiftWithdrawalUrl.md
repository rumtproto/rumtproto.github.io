---
title: "payments.getStarGiftWithdrawalUrl"
original: "https://core.telegram.org/method/payments.getStarGiftWithdrawalUrl"
section: ref
description: "Convert a collectible gift » to an NFT on the TON blockchain."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftWithdrawalUrl","url":"/method/payments.getStarGiftWithdrawalUrl/"}]
layout: layout.njk
---

# payments.getStarGiftWithdrawalUrl

Convert a [collectible gift »](/api/gifts/) to an NFT on the TON blockchain.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftWithdrawalUrl/">payments.starGiftWithdrawalUrl</a>#84aa3a9c url:<a href="/type/string/">string</a> = <a href="/type/payments.StarGiftWithdrawalUrl/">payments.StarGiftWithdrawalUrl</a>;
---functions---
<a href="/method/payments.getStarGiftWithdrawalUrl/" class="current_page_link">payments.getStarGiftWithdrawalUrl</a>#d06e93a8 stargift:<a href="/type/InputSavedStarGift/">InputSavedStarGift</a> password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/payments.StarGiftWithdrawalUrl/">payments.StarGiftWithdrawalUrl</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift/">InputSavedStarGift</a></td><td>The collectible gift to export.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>The current user's 2FA password, passed as <a href="/api/srp/">specified here »</a>.</td></tr></tbody></table>

### Result

[payments.StarGiftWithdrawalUrl](/type/payments.StarGiftWithdrawalUrl/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>The password was modified less than 24 hours ago, try again in %d seconds.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>This session was created less than 24 hours ago, try again in %d seconds.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
