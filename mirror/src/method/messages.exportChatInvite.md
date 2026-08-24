---
title: "messages.exportChatInvite"
original: "https://core.telegram.org/method/messages.exportChatInvite"
section: ref
description: "Export an invite link for a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.exportChatInvite","url":"/method/messages.exportChatInvite/"}]
layout: layout.njk
---

# messages.exportChatInvite

Export an invite link for a chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteExported/">chatInviteExported</a>#a22cbd96 flags:<a href="/type/%23/">#</a> revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:<a href="/type/string/">string</a> admin_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> start_date:flags.4?<a href="/type/int/">int</a> expire_date:flags.1?<a href="/type/int/">int</a> usage_limit:flags.2?<a href="/type/int/">int</a> usage:flags.3?<a href="/type/int/">int</a> requested:flags.7?<a href="/type/int/">int</a> subscription_expired:flags.10?<a href="/type/int/">int</a> title:flags.8?<a href="/type/string/">string</a> subscription_pricing:flags.9?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> = <a href="/type/ExportedChatInvite/">ExportedChatInvite</a>;
<a href="/constructor/chatInvitePublicJoinRequests/">chatInvitePublicJoinRequests</a>#ed107ab7 = <a href="/type/ExportedChatInvite/">ExportedChatInvite</a>;
---functions---
<a href="/method/messages.exportChatInvite/" class="current_page_link">messages.exportChatInvite</a>#a455de90 flags:<a href="/type/%23/">#</a> legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> expire_date:flags.0?<a href="/type/int/">int</a> usage_limit:flags.1?<a href="/type/int/">int</a> title:flags.4?<a href="/type/string/">string</a> subscription_pricing:flags.5?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> = <a href="/type/ExportedChatInvite/">ExportedChatInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>legacy_revoke_permanent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Legacy flag, reproducing legacy behavior of this method: if set, revokes all previous links before creating a new one. Kept for bot API BC, should not be used by modern clients.</td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether admin confirmation is required before admitting each separate user into the chat</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Expiration date</td></tr><tr><td><strong>usage_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Maximum number of users that can join using this link</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Description of the invite link, visible only to administrators</td></tr><tr><td><strong>subscription_pricing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a></td><td>For <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>, contains the pricing of the subscription the user must activate to join the private channel.</td></tr></tbody></table>

### Result

[ExportedChatInvite](/type/ExportedChatInvite/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel/#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>EXPIRE_DATE_INVALID</td><td>The specified expiration date is invalid.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PRICING_CHAT_INVALID</td><td>The pricing for the <a href="/api/subscriptions/">subscription</a> is invalid, the maximum price is specified in the <a href="/api/config/#stars-subscription-amount-max"><code>stars_subscription_amount_max</code> config key&nbsp;»</a>.</td></tr><tr><td>400</td><td>SUBSCRIPTION_PERIOD_INVALID</td><td>The specified subscription_pricing.period is invalid.</td></tr><tr><td>400</td><td>USAGE_LIMIT_INVALID</td><td>The specified usage limit is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Star subscriptions](/api/subscriptions/)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
