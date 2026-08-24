---
title: "messages.getPollVotes"
original: "https://core.telegram.org/method/messages.getPollVotes"
section: ref
description: "Get poll results for non-anonymous polls"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPollVotes","url":"/method/messages.getPollVotes/"}]
layout: layout.njk
---

# messages.getPollVotes

Get poll results for non-anonymous polls

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.votesList/">messages.votesList</a>#4899484e flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> votes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerVote/">MessagePeerVote</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/messages.VotesList/">messages.VotesList</a>;
---functions---
<a href="/method/messages.getPollVotes/" class="current_page_link">messages.getPollVotes</a>#b86e380e flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> option:flags.0?<a href="/type/bytes/">bytes</a> offset:flags.1?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.VotesList/">messages.VotesList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Chat where the poll was sent</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>Get only results for the specified poll <code>option</code></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Offset for results, taken from the <code>next_offset</code> field of <a href="/constructor/messages.votesList/">messages.votesList</a>, initially an empty string.<br>Note: if no more results are available, the method call will return an empty <code>next_offset</code>; thus, avoid providing the <code>next_offset</code> returned in <a href="/constructor/messages.votesList/">messages.votesList</a> if it is empty, to avoid an infinite loop.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of results to return</td></tr></tbody></table>

### Result

[messages.VotesList](/type/messages.VotesList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>BROADCAST_FORBIDDEN</td><td>Channel poll voters and reactions cannot be fetched to prevent deanonymization.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>403</td><td>POLL_VOTE_REQUIRED</td><td>Cast a vote in the poll before calling this method.</td></tr></tbody></table>

### Related pages

#### [messages.votesList](/constructor/messages.votesList/)

How users voted in a poll
