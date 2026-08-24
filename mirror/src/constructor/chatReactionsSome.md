---
title: "chatReactionsSome"
original: "https://core.telegram.org/constructor/chatReactionsSome"
section: ref
description: "Some reactions are allowed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatReactionsSome","url":"/constructor/chatReactionsSome/"}]
layout: layout.njk
---

# chatReactionsSome

Some reactions are allowed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatReactionsSome/" class="current_page_link">chatReactionsSome</a>#661d4037 reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; = <a href="/type/ChatReactions/">ChatReactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt;</td><td>Allowed set of reactions: the <a href="/api/config/#reactions-in-chat-max">reactions_in_chat_max</a> configuration field indicates the maximum number of reactions that can be specified in this field.</td></tr></tbody></table>

### Type

[ChatReactions](/type/ChatReactions/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
