---
title: "messages.VotesList"
original: "https://core.telegram.org/type/messages.VotesList"
section: ref
description: "How users voted in a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.VotesList","url":"/type/messages.VotesList/"}]
layout: layout.njk
---

# messages.VotesList

How users voted in a poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.votesList/">messages.votesList</a>#4899484e flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> votes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerVote/">MessagePeerVote</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/messages.VotesList/" class="current_page_link">messages.VotesList</a>;

---functions---

<a href="/method/messages.getPollVotes/">messages.getPollVotes</a>#b86e380e flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> option:flags.0?<a href="/type/bytes/">bytes</a> offset:flags.1?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.VotesList/" class="current_page_link">messages.VotesList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.votesList/">messages.votesList</a></td><td>How users voted in a poll</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getPollVotes/">messages.getPollVotes</a></td><td>Get poll results for non-anonymous polls</td></tr></tbody></table>
