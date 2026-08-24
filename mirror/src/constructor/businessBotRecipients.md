---
title: "businessBotRecipients"
original: "https://core.telegram.org/constructor/businessBotRecipients"
section: ref
description: "Specifies the private chats that a connected business bot » may receive messages and interact with."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessBotRecipients","url":"/constructor/businessBotRecipients/"}]
layout: layout.njk
---

# businessBotRecipients

Specifies the private chats that a [connected business bot »](/api/bots/connected-business-bots/) may receive messages and interact with.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessBotRecipients/" class="current_page_link">businessBotRecipients</a>#b88cf373 flags:<a href="/type/%23/">#</a> existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; exclude_users:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/BusinessBotRecipients/">BusinessBotRecipients</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>existing_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Selects all existing private chats.</td></tr><tr><td><strong>new_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Selects all new private chats.</td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Selects all private chats with contacts.</td></tr><tr><td><strong>non_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Selects all private chats with non-contacts.</td></tr><tr><td><strong>exclude_selected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, then all private chats <em>except</em> the ones selected by <code>existing_chats</code>, <code>new_chats</code>, <code>contacts</code>, <code>non_contacts</code> and <code>users</code> are chosen.<br>Note that if this flag is set, any values passed in <code>exclude_users</code> will be merged and moved into <code>users</code> by the server, thus <code>exclude_users</code> will always be empty.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Explicitly selected private chats.</td></tr><tr><td><strong>exclude_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Identifiers of private chats that are always excluded.</td></tr></tbody></table>

### Type

[BusinessBotRecipients](/type/BusinessBotRecipients/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
