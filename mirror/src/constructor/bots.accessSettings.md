---
title: "bots.accessSettings"
original: "https://core.telegram.org/constructor/bots.accessSettings"
section: ref
description: "Access restriction settings for a managed bot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.accessSettings","url":"/constructor/bots.accessSettings/"}]
layout: layout.njk
---

# bots.accessSettings

Access restriction settings for a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/bots.accessSettings/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>restricted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, only the owner and the users in <code>add_users</code> can access the managed bot</td></tr><tr><td><strong>add_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Additional users (max 10, excluding the owner) who can access the managed bot; only present when <code>restricted</code> is set</td></tr></tbody></table>

### Type

[bots.AccessSettings](/type/bots.AccessSettings/)

### Related pages

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).
