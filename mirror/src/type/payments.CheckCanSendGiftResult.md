---
title: "payments.CheckCanSendGiftResult"
original: "https://core.telegram.org/type/payments.CheckCanSendGiftResult"
section: ref
description: "Specifies if a gift can or cannot be sent."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.CheckCanSendGiftResult","url":"/type/payments.CheckCanSendGiftResult/"}]
layout: layout.njk
---

# payments.CheckCanSendGiftResult

Specifies if a gift can or cannot be sent.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.checkCanSendGiftResultOk/">payments.checkCanSendGiftResultOk</a>#374fa7ad = <a href="/type/payments.CheckCanSendGiftResult/" class="current_page_link">payments.CheckCanSendGiftResult</a>;
<a href="/constructor/payments.checkCanSendGiftResultFail/">payments.checkCanSendGiftResultFail</a>#d5e58274 reason:<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/payments.CheckCanSendGiftResult/" class="current_page_link">payments.CheckCanSendGiftResult</a>;

---functions---

<a href="/method/payments.checkCanSendGift/">payments.checkCanSendGift</a>#c0c4edc9 gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.CheckCanSendGiftResult/" class="current_page_link">payments.CheckCanSendGiftResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.checkCanSendGiftResultOk/">payments.checkCanSendGiftResultOk</a></td><td>The specified gift can be sent.</td></tr><tr><td><a href="/constructor/payments.checkCanSendGiftResultFail/">payments.checkCanSendGiftResultFail</a></td><td>The specified gift cannot be sent yet for the specified reason.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.checkCanSendGift/">payments.checkCanSendGift</a></td><td>Check if the specified <a href="/api/gifts/">gift »</a> can be sent.</td></tr></tbody></table>
