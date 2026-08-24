---
title: "ChatInvite"
original: "https://core.telegram.org/type/ChatInvite"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatInvite","url":"/type/ChatInvite/"}]
layout: layout.njk
---

# ChatInvite

Chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteAlready/">chatInviteAlready</a>#5a686d7c chat:<a href="/type/Chat/">Chat</a> = <a href="/type/ChatInvite/" class="current_page_link">ChatInvite</a>;
<a href="/constructor/chatInvite/">chatInvite</a>#5c9d3702 flags:<a href="/type/%23/">#</a> channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:<a href="/type/string/">string</a> about:flags.5?<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> participants_count:<a href="/type/int/">int</a> participants:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; color:<a href="/type/int/">int</a> subscription_pricing:flags.10?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> subscription_form_id:flags.12?<a href="/type/long/">long</a> bot_verification:flags.13?<a href="/type/BotVerification/">BotVerification</a> = <a href="/type/ChatInvite/" class="current_page_link">ChatInvite</a>;
<a href="/constructor/chatInvitePeek/">chatInvitePeek</a>#61695cb0 chat:<a href="/type/Chat/">Chat</a> expires:<a href="/type/int/">int</a> = <a href="/type/ChatInvite/" class="current_page_link">ChatInvite</a>;

---functions---

<a href="/method/messages.checkChatInvite/">messages.checkChatInvite</a>#3eadb1bb hash:<a href="/type/string/">string</a> = <a href="/type/ChatInvite/" class="current_page_link">ChatInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatInviteAlready/">chatInviteAlready</a></td><td>The user has already joined this chat</td></tr><tr><td><a href="/constructor/chatInvite/">chatInvite</a></td><td>Chat invite info</td></tr><tr><td><a href="/constructor/chatInvitePeek/">chatInvitePeek</a></td><td>A chat invitation that also allows peeking into the group to read messages without joining it.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.checkChatInvite/">messages.checkChatInvite</a></td><td>Check the validity of a chat invite link and get basic info about it</td></tr></tbody></table>
