---
title: "InputBusinessBotRecipients"
original: "https://core.telegram.org/type/InputBusinessBotRecipients"
section: ref
description: "Specifies the private chats that a connected business bot » may interact with."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBusinessBotRecipients","url":"/type/InputBusinessBotRecipients/"}]
layout: layout.njk
---

# InputBusinessBotRecipients

Specifies the private chats that a [connected business bot »](/api/bots/connected-business-bots/) may interact with.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBusinessBotRecipients/">inputBusinessBotRecipients</a>#c4e5921e flags:<a href="/type/%23/">#</a> existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; exclude_users:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/InputBusinessBotRecipients/" class="current_page_link">InputBusinessBotRecipients</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBusinessBotRecipients/">inputBusinessBotRecipients</a></td><td>Specifies the private chats that a <a href="/api/bots/connected-business-bots/">connected business bot »</a> may interact with.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
