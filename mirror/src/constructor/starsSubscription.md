---
title: "starsSubscription"
original: "https://core.telegram.org/constructor/starsSubscription"
section: ref
description: "Represents a Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsSubscription","url":"/constructor/starsSubscription/"}]
layout: layout.njk
---

# starsSubscription

Represents a [Telegram Star subscription »](/api/invites/#paid-invite-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsSubscription/" class="current_page_link">starsSubscription</a>#2e6eab1a flags:<a href="/type/%23/">#</a> canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:<a href="/type/string/">string</a> peer:<a href="/type/Peer/">Peer</a> until_date:<a href="/type/int/">int</a> pricing:<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> chat_invite_hash:flags.3?<a href="/type/string/">string</a> title:flags.4?<a href="/type/string/">string</a> photo:flags.5?<a href="/type/WebDocument/">WebDocument</a> invoice_slug:flags.6?<a href="/type/string/">string</a> = <a href="/type/StarsSubscription/">StarsSubscription</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>canceled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this subscription was cancelled.</td></tr><tr><td><strong>can_refulfill</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether we left the associated private channel, but we can still rejoin it using <a href="/method/payments.fulfillStarsSubscription/">payments.fulfillStarsSubscription</a> because the current subscription period hasn't expired yet.</td></tr><tr><td><strong>missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this subscription has expired because there are not enough stars on the user's balance to extend it.</td></tr><tr><td><strong>bot_canceled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Set if this <a href="/api/subscriptions/#bot-subscriptions">bot subscription</a> was cancelled by the bot</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Subscription ID.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Identifier of the associated private chat.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Expiration date of the current subscription period.</td></tr><tr><td><strong>pricing</strong></td><td style="text-align: center;"><a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a></td><td>Pricing of the subscription in Telegram Stars.</td></tr><tr><td><strong>chat_invite_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Invitation link, used to renew the subscription after cancellation or expiration.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>For bot subscriptions, the title of the subscription invoice</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/WebDocument/">WebDocument</a></td><td>For bot subscriptions, the photo from the subscription invoice</td></tr><tr><td><strong>invoice_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>For bot subscriptions, the <a href="/api/links/#invoice-links">identifier</a> of the subscription invoice</td></tr></tbody></table>

### Type

[StarsSubscription](/type/StarsSubscription/)

### Related pages

#### [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/)

Re-join a private channel associated to an active [Telegram Star subscription »](/api/invites/#paid-invite-links).

#### [Star subscriptions](/api/subscriptions/)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
