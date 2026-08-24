---
title: "messages.votesList"
original: "https://core.telegram.org/constructor/messages.votesList"
section: ref
description: "How users voted in a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.votesList","url":"/constructor/messages.votesList/"}]
layout: layout.njk
---

# messages.votesList

How users voted in a poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.votesList/" class="current_page_link">messages.votesList</a>#4899484e flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> votes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerVote/">MessagePeerVote</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/messages.VotesList/">messages.VotesList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of votes for all options (or only for the chosen <code>option</code>, if provided to <a href="/method/messages.getPollVotes/">messages.getPollVotes</a>)</td></tr><tr><td><strong>votes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerVote/">MessagePeerVote</a>&gt;</td><td>Vote info for each user</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about users that voted in the poll</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset to use with the next <a href="/method/messages.getPollVotes/">messages.getPollVotes</a> request, empty string if no more results are available.</td></tr></tbody></table>

### Type

[messages.VotesList](/type/messages.VotesList/)

### Related pages

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Get poll results for non-anonymous polls
