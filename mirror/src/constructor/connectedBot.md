---
title: "connectedBot"
original: "https://core.telegram.org/constructor/connectedBot"
section: ref
description: "Contains info about a connected business bot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"connectedBot","url":"/constructor/connectedBot/"}]
layout: layout.njk
---

# connectedBot

Contains info about a [connected business bot »](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/connectedBot/" class="current_page_link">connectedBot</a>#cd64636c flags:<a href="/type/%23/">#</a> bot_id:<a href="/type/long/">long</a> recipients:<a href="/type/BusinessBotRecipients/">BusinessBotRecipients</a> rights:<a href="/type/BusinessBotRights/">BusinessBotRights</a> = <a href="/type/ConnectedBot/">ConnectedBot</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the connected bot</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessBotRecipients/">BusinessBotRecipients</a></td><td>Specifies the private chats that a <a href="/api/bots/connected-business-bots/">connected business bot »</a> may receive messages and interact with.<br></td></tr><tr><td><strong>rights</strong></td><td style="text-align: center;"><a href="/type/BusinessBotRights/">BusinessBotRights</a></td><td>Business bot rights.</td></tr></tbody></table>

### Type

[ConnectedBot](/type/ConnectedBot/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
