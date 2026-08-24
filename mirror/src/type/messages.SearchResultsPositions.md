---
title: "messages.SearchResultsPositions"
original: "https://core.telegram.org/type/messages.SearchResultsPositions"
section: ref
description: "Information about sparse positions of messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SearchResultsPositions","url":"/type/messages.SearchResultsPositions/"}]
layout: layout.njk
---

# messages.SearchResultsPositions

Information about sparse positions of messages

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchResultsPositions/">messages.searchResultsPositions</a>#53b22baf count:<a href="/type/int/">int</a> positions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsPosition/">SearchResultsPosition</a>&gt; = <a href="/type/messages.SearchResultsPositions/" class="current_page_link">messages.SearchResultsPositions</a>;

---functions---

<a href="/method/messages.getSearchResultsPositions/">messages.getSearchResultsPositions</a>#9c7f2f10 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> saved_peer_id:flags.2?<a href="/type/InputPeer/">InputPeer</a> filter:<a href="/type/MessagesFilter/">MessagesFilter</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.SearchResultsPositions/" class="current_page_link">messages.SearchResultsPositions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsPositions/">messages.searchResultsPositions</a></td><td>Information about sparse positions of messages</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsPositions/">messages.getSearchResultsPositions</a></td><td>Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation.<br><br>Returns the results in reverse chronological order (i.e., in order of decreasing message_id).</td></tr></tbody></table>
