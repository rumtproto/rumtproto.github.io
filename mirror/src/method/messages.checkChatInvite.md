---
title: "messages.checkChatInvite"
original: "https://core.telegram.org/method/messages.checkChatInvite"
section: ref
description: "Check the validity of a chat invite link and get basic info about it"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.checkChatInvite","url":"/method/messages.checkChatInvite/"}]
layout: layout.njk
---

# messages.checkChatInvite

Check the validity of a chat invite link and get basic info about it

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteAlready/">chatInviteAlready</a>#5a686d7c chat:<a href="/type/Chat/">Chat</a> = <a href="/type/ChatInvite/">ChatInvite</a>;
<a href="/constructor/chatInvite/">chatInvite</a>#5c9d3702 flags:<a href="/type/%23/">#</a> channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:<a href="/type/string/">string</a> about:flags.5?<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> participants_count:<a href="/type/int/">int</a> participants:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; color:<a href="/type/int/">int</a> subscription_pricing:flags.10?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> subscription_form_id:flags.12?<a href="/type/long/">long</a> bot_verification:flags.13?<a href="/type/BotVerification/">BotVerification</a> = <a href="/type/ChatInvite/">ChatInvite</a>;
<a href="/constructor/chatInvitePeek/">chatInvitePeek</a>#61695cb0 chat:<a href="/type/Chat/">Chat</a> expires:<a href="/type/int/">int</a> = <a href="/type/ChatInvite/">ChatInvite</a>;
---functions---
<a href="/method/messages.checkChatInvite/" class="current_page_link">messages.checkChatInvite</a>#3eadb1bb hash:<a href="/type/string/">string</a> = <a href="/type/ChatInvite/">ChatInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Invite hash from <a href="/api/links/#chat-invite-links">chat invite deep link »</a>.</td></tr></tbody></table>

### Result

[ChatInvite](/type/ChatInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>INVITE_HASH_EMPTY</td><td>The invite hash is empty.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr><tr><td>400</td><td>INVITE_HASH_INVALID</td><td>The invite hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
