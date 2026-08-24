---
title: "StarsSubscription"
original: "https://core.telegram.org/type/StarsSubscription"
section: ref
description: "Represents a Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsSubscription","url":"/type/StarsSubscription/"}]
layout: layout.njk
---

# StarsSubscription

Represents a [Telegram Star subscription »](/api/invites/#paid-invite-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsSubscription/">starsSubscription</a>#2e6eab1a flags:<a href="/type/%23/">#</a> canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:<a href="/type/string/">string</a> peer:<a href="/type/Peer/">Peer</a> until_date:<a href="/type/int/">int</a> pricing:<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> chat_invite_hash:flags.3?<a href="/type/string/">string</a> title:flags.4?<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice_slug:flags.6?<a href="/type/string/">string</a> = <a href="/type/StarsSubscription/" class="current_page_link">StarsSubscription</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsSubscription/">starsSubscription</a></td><td>Represents a <a href="/api/invites/#paid-invite-links">Telegram Star subscription »</a>.</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
