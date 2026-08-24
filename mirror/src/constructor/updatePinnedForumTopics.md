---
title: "updatePinnedForumTopics"
original: "https://core.telegram.org/constructor/updatePinnedForumTopics"
section: ref
description: "The pinned topics of a forum have changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedForumTopics","url":"/constructor/updatePinnedForumTopics/"}]
layout: layout.njk
---

# updatePinnedForumTopics

The [pinned topics](/api/forum/#forum-topics) of a forum have changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePinnedForumTopics/" class="current_page_link">updatePinnedForumTopics</a>#def143d0 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> order:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Ordered list containing the IDs of all pinned topics.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
