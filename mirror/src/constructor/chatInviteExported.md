---
title: "chatInviteExported"
original: "https://core.telegram.org/constructor/chatInviteExported"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatInviteExported","url":"/constructor/chatInviteExported/"}]
layout: layout.njk
---

# chatInviteExported

Exported chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteExported/" class="current_page_link">chatInviteExported</a>#a22cbd96 flags:<a href="/type/%23/">#</a> revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:<a href="/type/string/">string</a> admin_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> start_date:flags.4?<a href="/type/int/">int</a> expire_date:flags.1?<a href="/type/int/">int</a> usage_limit:flags.2?<a href="/type/int/">int</a> usage:flags.3?<a href="/type/int/">int</a> requested:flags.7?<a href="/type/int/">int</a> subscription_expired:flags.10?<a href="/type/int/">int</a> title:flags.8?<a href="/type/string/">string</a> subscription_pricing:flags.9?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> = <a href="/type/ExportedChatInvite/">ExportedChatInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this chat invite was revoked</td></tr><tr><td><strong>permanent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this chat invite has no expiration</td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether users importing this invite link will have to be approved to join the channel or group</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Chat invitation link</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the admin that created this chat invite</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was this chat invite created</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>When was this chat invite last modified</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>When does this chat invite expire</td></tr><tr><td><strong>usage_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Maximum number of users that can join using this link</td></tr><tr><td><strong>usage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>How many users joined using this link</td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/int/">int</a></td><td>Number of users that have already used this link to join</td></tr><tr><td><strong>subscription_expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>For <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>, contains the number of chat members which have already joined the chat using the link, but have already left due to expiration of their subscription.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/string/">string</a></td><td>Custom description for the invite link, visible only to admins</td></tr><tr><td><strong>subscription_pricing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a></td><td>For <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>, contains the pricing of the subscription the user must activate to join the private channel.</td></tr></tbody></table>

### Type

[ExportedChatInvite](/type/ExportedChatInvite/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
