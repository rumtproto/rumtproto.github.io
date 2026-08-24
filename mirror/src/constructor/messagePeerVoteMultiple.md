---
title: "messagePeerVoteMultiple"
original: "https://core.telegram.org/constructor/messagePeerVoteMultiple"
section: ref
description: "How a peer voted in a multiple-choice poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messagePeerVoteMultiple","url":"/constructor/messagePeerVoteMultiple/"}]
layout: layout.njk
---

# messagePeerVoteMultiple

How a peer voted in a multiple-choice poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messagePeerVoteMultiple/" class="current_page_link">messagePeerVoteMultiple</a>#4628f6e6 peer:<a href="/type/Peer/">Peer</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; date:<a href="/type/int/">int</a> = <a href="/type/MessagePeerVote/">MessagePeerVote</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer ID</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Options chosen by the peer</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the peer cast their votes</td></tr></tbody></table>

### Type

[MessagePeerVote](/type/MessagePeerVote/)
