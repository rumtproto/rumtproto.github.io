---
title: "messageActionGiftTon"
original: "https://core.telegram.org/constructor/messageActionGiftTon"
section: ref
description: "You were gifted some Grams."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGiftTon","url":"/constructor/messageActionGiftTon/"}]
layout: layout.njk
---

# messageActionGiftTon

You were gifted some Grams.

This service message should be displayed below the appropriate sticker from the [inputStickerSetTonGifts »](/constructor/inputStickerSetTonGifts/) [stickerset »](/api/stickers/#stickersets):

-   If `crypto_amount <= 10_000_000_000`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   If `crypto_amount <= 50_000_000_000`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/31E283A3.png" width="20" height="20" alt="1️⃣">"
-   Otherwise, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGiftTon/" class="current_page_link">messageActionGiftTon</a>#a8a3c699 flags:<a href="/type/%23/">#</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> crypto_currency:<a href="/type/string/">string</a> crypto_amount:<a href="/type/long/">long</a> transaction_id:flags.0?<a href="/type/string/">string</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of a localized FIAT currency.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>FIAT currency equivalent (in the currency specified in <code>currency</code>) of the amount specified in <code>crypto_amount</code>.</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the cryptocurrency.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount in the smallest unit of the cryptocurrency (for TONs, one billionth of a ton, AKA a nanogram).</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Transaction ID.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/)

TON gifts stickerset.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
