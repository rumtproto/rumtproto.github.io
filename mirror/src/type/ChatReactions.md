---
title: "ChatReactions"
original: "https://core.telegram.org/type/ChatReactions"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatReactions","url":"/type/ChatReactions/"}]
layout: layout.njk
---

# ChatReactions

Available chat reactions

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatReactionsNone/">chatReactionsNone</a>#eafc32bc = <a href="/type/ChatReactions/" class="current_page_link">ChatReactions</a>;
<a href="/constructor/chatReactionsAll/">chatReactionsAll</a>#52928bca flags:<a href="/type/%23/">#</a> allow_custom:flags.0?true = <a href="/type/ChatReactions/" class="current_page_link">ChatReactions</a>;
<a href="/constructor/chatReactionsSome/">chatReactionsSome</a>#661d4037 reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; = <a href="/type/ChatReactions/" class="current_page_link">ChatReactions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatReactionsNone/">chatReactionsNone</a></td><td>No reactions are allowed</td></tr><tr><td><a href="/constructor/chatReactionsAll/">chatReactionsAll</a></td><td>All reactions or all non-custom reactions are allowed</td></tr><tr><td><a href="/constructor/chatReactionsSome/">chatReactionsSome</a></td><td>Some reactions are allowed</td></tr></tbody></table>
