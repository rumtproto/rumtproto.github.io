---
title: "updateMessagePollVote"
original: "https://core.telegram.org/constructor/updateMessagePollVote"
section: ref
description: "A specific peer has voted in a poll (this update can only be received by a bot)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMessagePollVote","url":"/constructor/updateMessagePollVote/"}]
layout: layout.njk
---

# updateMessagePollVote

A specific peer has voted in a poll (this update can only be received by a bot).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMessagePollVote/" class="current_page_link">updateMessagePollVote</a>#24f40e77 poll_id:<a href="/type/long/">long</a> peer:<a href="/type/Peer/">Peer</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>poll_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Poll ID</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer that voted in the poll</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Chosen option(s)</td></tr><tr><td><strong>positions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>0-based indices of the voted options within the <code>answers</code> vector, corresponding element-by-element to <code>options</code></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
