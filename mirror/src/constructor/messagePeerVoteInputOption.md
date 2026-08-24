---
title: "messagePeerVoteInputOption"
original: "https://core.telegram.org/constructor/messagePeerVoteInputOption"
section: ref
description: "How a peer voted in a poll (reduced constructor, returned if an option was provided to messages.getPollVotes)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messagePeerVoteInputOption","url":"/constructor/messagePeerVoteInputOption/"}]
layout: layout.njk
---

# messagePeerVoteInputOption

How a peer voted in a poll (reduced constructor, returned if an `option` was provided to [messages.getPollVotes](/method/messages.getPollVotes/))

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messagePeerVoteInputOption/" class="current_page_link">messagePeerVoteInputOption</a>#74cda504 peer:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> = <a href="/type/MessagePeerVote/">MessagePeerVote</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer that voted for the queried <code>option</code></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did the peer cast the vote</td></tr></tbody></table>

### Type

[MessagePeerVote](/type/MessagePeerVote/)

### Related pages

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Get poll results for non-anonymous polls
