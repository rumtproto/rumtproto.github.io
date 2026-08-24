---
title: "MessagePeerVote"
original: "https://core.telegram.org/type/MessagePeerVote"
section: ref
description: "How a user voted in a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessagePeerVote","url":"/type/MessagePeerVote/"}]
layout: layout.njk
---

# MessagePeerVote

How a user voted in a poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messagePeerVote/">messagePeerVote</a>#b6cc2d5c peer:<a href="/type/Peer/">Peer</a> option:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> = <a href="/type/MessagePeerVote/" class="current_page_link">MessagePeerVote</a>;
<a href="/constructor/messagePeerVoteInputOption/">messagePeerVoteInputOption</a>#74cda504 peer:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> = <a href="/type/MessagePeerVote/" class="current_page_link">MessagePeerVote</a>;
<a href="/constructor/messagePeerVoteMultiple/">messagePeerVoteMultiple</a>#4628f6e6 peer:<a href="/type/Peer/">Peer</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; date:<a href="/type/int/">int</a> = <a href="/type/MessagePeerVote/" class="current_page_link">MessagePeerVote</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messagePeerVote/">messagePeerVote</a></td><td>How a peer voted in a poll</td></tr><tr><td><a href="/constructor/messagePeerVoteInputOption/">messagePeerVoteInputOption</a></td><td>How a peer voted in a poll (reduced constructor, returned if an <code>option</code> was provided to <a href="/method/messages.getPollVotes/">messages.getPollVotes</a>)</td></tr><tr><td><a href="/constructor/messagePeerVoteMultiple/">messagePeerVoteMultiple</a></td><td>How a peer voted in a multiple-choice poll</td></tr></tbody></table>
