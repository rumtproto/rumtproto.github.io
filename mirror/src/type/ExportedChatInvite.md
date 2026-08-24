---
title: "ExportedChatInvite"
original: "https://core.telegram.org/type/ExportedChatInvite"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedChatInvite","url":"/type/ExportedChatInvite/"}]
layout: layout.njk
---

# ExportedChatInvite

Exported chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatInviteExported/">chatInviteExported</a>#a22cbd96 flags:<a href="/type/%23/">#</a> revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:<a href="/type/string/">string</a> admin_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> start_date:flags.4?<a href="/type/int/">int</a> expire_date:flags.1?<a href="/type/int/">int</a> usage_limit:flags.2?<a href="/type/int/">int</a> usage:flags.3?<a href="/type/int/">int</a> requested:flags.7?<a href="/type/int/">int</a> subscription_expired:flags.10?<a href="/type/int/">int</a> title:flags.8?<a href="/type/string/">string</a> subscription_pricing:flags.9?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> = <a href="/type/ExportedChatInvite/" class="current_page_link">ExportedChatInvite</a>;
<a href="/constructor/chatInvitePublicJoinRequests/">chatInvitePublicJoinRequests</a>#ed107ab7 = <a href="/type/ExportedChatInvite/" class="current_page_link">ExportedChatInvite</a>;

---functions---

<a href="/method/messages.exportChatInvite/">messages.exportChatInvite</a>#a455de90 flags:<a href="/type/%23/">#</a> legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> expire_date:flags.0?<a href="/type/int/">int</a> usage_limit:flags.1?<a href="/type/int/">int</a> title:flags.4?<a href="/type/string/">string</a> subscription_pricing:flags.5?<a href="/type/StarsSubscriptionPricing/">StarsSubscriptionPricing</a> = <a href="/type/ExportedChatInvite/" class="current_page_link">ExportedChatInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatInviteExported/">chatInviteExported</a></td><td>Exported chat invite</td></tr><tr><td><a href="/constructor/chatInvitePublicJoinRequests/">chatInvitePublicJoinRequests</a></td><td>Used in updates and in the channel log to indicate when a user is requesting to join or has joined a <a href="/api/discussion/#requiring-users-to-join-the-group">discussion group</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.exportChatInvite/">messages.exportChatInvite</a></td><td>Export an invite link for a chat</td></tr></tbody></table>
