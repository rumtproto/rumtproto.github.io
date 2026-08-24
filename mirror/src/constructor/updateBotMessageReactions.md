---
title: "updateBotMessageReactions"
original: "https://core.telegram.org/constructor/updateBotMessageReactions"
section: ref
description: "Bots only: the number of reactions on a message with anonymous reactions has changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotMessageReactions","url":"/constructor/updateBotMessageReactions/"}]
layout: layout.njk
---

# updateBotMessageReactions

Bots only: the number of reactions on a message with anonymous reactions has changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotMessageReactions/" class="current_page_link">updateBotMessageReactions</a>#9cb7759 peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt; qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer of the reacted-to message.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the reacted-to message.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of the change.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt;</td><td>New reaction counters.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">QTS</a> event sequence identifier</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
