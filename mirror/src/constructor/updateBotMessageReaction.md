---
title: "updateBotMessageReaction"
original: "https://core.telegram.org/constructor/updateBotMessageReaction"
section: ref
description: "Bots only: a user has changed their reactions on a message with public reactions."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotMessageReaction","url":"/constructor/updateBotMessageReaction/"}]
layout: layout.njk
---

# updateBotMessageReaction

Bots only: a user has changed their reactions on a message with public reactions.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotMessageReaction/" class="current_page_link">updateBotMessageReaction</a>#ac21d3ce peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> actor:<a href="/type/Peer/">Peer</a> old_reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; new_reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer of the reacted-to message.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the reacted-to message.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of the change.</td></tr><tr><td><strong>actor</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The user that (un)reacted to the message.</td></tr><tr><td><strong>old_reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt;</td><td>Old reactions</td></tr><tr><td><strong>new_reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt;</td><td>New reactions</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">QTS</a> event sequence identifier</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
