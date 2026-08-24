---
title: "BusinessBotRecipients"
original: "https://core.telegram.org/type/BusinessBotRecipients"
section: ref
description: "Specifies the private chats that a connected business bot » may receive messages and interact with."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessBotRecipients","url":"/type/BusinessBotRecipients/"}]
layout: layout.njk
---

# BusinessBotRecipients

Specifies the private chats that a [connected business bot »](/api/bots/connected-business-bots/) may receive messages and interact with.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessBotRecipients/">businessBotRecipients</a>#b88cf373 flags:<a href="/type/%23/">#</a> existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; exclude_users:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/BusinessBotRecipients/" class="current_page_link">BusinessBotRecipients</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessBotRecipients/">businessBotRecipients</a></td><td>Specifies the private chats that a <a href="/api/bots/connected-business-bots/">connected business bot »</a> may receive messages and interact with.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
