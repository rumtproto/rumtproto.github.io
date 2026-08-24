---
title: "chatInvite"
original: "https://core.telegram.org/constructor/chatInvite"
section: ref
description: "How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatInvite","url":"/constructor/chatInvite/"}]
layout: layout.njk
---

# chatInvite

Chat invite info

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInvite/" class="current_page_link">chatInvite</a>#5c9d3702 flags:<a href="/type/%23/">#</a> channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:<a href="/type/string/">string</a> about:flags.5?<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> participants_count:<a href="/type/int/">int</a> participants:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; color:<a href="/type/int/">int</a> subscription_pricing:flags.10?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> subscription_form_id:flags.12?<a href="/type/long/">long</a> bot_verification:flags.13?<a href="/type/BotVerification/">BotVerification</a> = <a href="/type/ChatInvite/">ChatInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/channel/">channel/supergroup</a> or a <a href="/api/channel/">normal group</a></td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/channel/">channel</a></td></tr><tr><td><strong>public</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this is a public <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/channel/">supergroup</a></td></tr><tr><td><strong>request_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether the <a href="/api/invites/#join-requests">join request »</a> must be first approved by an administrator</td></tr><tr><td><strong>verified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Is this chat or channel verified by Telegram?</td></tr><tr><td><strong>scam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>This chat is probably a scam</td></tr><tr><td><strong>fake</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>If set, this chat was reported by many users as a fake or scam: be careful when interacting with it.</td></tr><tr><td><strong>can_refulfill_subscription</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>If set, indicates that the user has already paid for the associated <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a> and it hasn't expired yet, so they may re-join the channel using <a href="/method/messages.importChatInvite/">messages.importChatInvite</a> without repeating the payment.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Chat/supergroup/channel title</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>Description of the group of channel</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo/">Photo</a></td><td>Chat/supergroup/channel photo</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Participant count</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>A few of the participants that are in the group</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/colors/">Profile color palette ID</a></td></tr><tr><td><strong>subscription_pricing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a></td><td>For <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>, contains the pricing of the subscription the user must activate to join the private channel.</td></tr><tr><td><strong>subscription_form_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/long/">long</a></td><td>For <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>, the ID of the payment form for the subscription.</td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/BotVerification/">BotVerification</a></td><td>Describes a <a href="/api/bots/verification/">bot verification icon »</a>.</td></tr></tbody></table>

### Type

[ChatInvite](/type/ChatInvite/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [messages.importChatInvite](/method/messages.importChatInvite/)

Import a chat invite and join a private chat/supergroup/channel

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
