---
title: "messages.deleteMessages"
original: "https://core.telegram.org/method/messages.deleteMessages"
section: ref
description: "Deletes messages by their identifiers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteMessages","url":"/method/messages.deleteMessages/"}]
layout: layout.njk
---

# messages.deleteMessages

Deletes messages by their identifiers.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedMessages/">messages.affectedMessages</a>#84d19185 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;
---functions---
<a href="/method/messages.deleteMessages/" class="current_page_link">messages.deleteMessages</a>#e58e95d2 flags:<a href="/type/%23/">#</a> revoke:flags.0?true id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedMessages/">messages.AffectedMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to delete messages for all participants of the chat</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Message ID list</td></tr></tbody></table>

### Result

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>403</td><td>MESSAGE_DELETE_FORBIDDEN</td><td>You can't delete one of the messages you tried to delete, most likely because it is a service message.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>SELF_DELETE_RESTRICTED</td><td>Business bots can't delete messages just for the user, <code>revoke</code> <strong>must</strong> be set.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
