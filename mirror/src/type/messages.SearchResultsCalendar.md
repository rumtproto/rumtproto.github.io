---
title: "messages.SearchResultsCalendar"
original: "https://core.telegram.org/type/messages.SearchResultsCalendar"
section: ref
description: "Information about found messages sent on a specific day"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SearchResultsCalendar","url":"/type/messages.SearchResultsCalendar/"}]
layout: layout.njk
---

# messages.SearchResultsCalendar

Information about found messages sent on a specific day

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchResultsCalendar/">messages.searchResultsCalendar</a>#147ee23c flags:<a href="/type/%23/">#</a> inexact:flags.0?true count:<a href="/type/int/">int</a> min_date:<a href="/type/int/">int</a> min_msg_id:<a href="/type/int/">int</a> offset_id_offset:flags.1?<a href="/type/int/">int</a> periods:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SearchResultsCalendar/" class="current_page_link">messages.SearchResultsCalendar</a>;

---functions---

<a href="/method/messages.getSearchResultsCalendar/">messages.getSearchResultsCalendar</a>#6aa3f6bd flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> saved_peer_id:flags.2?<a href="/type/InputPeer/">InputPeer</a> filter:<a href="/type/MessagesFilter/">MessagesFilter</a> offset_id:<a href="/type/int/">int</a> offset_date:<a href="/type/int/">int</a> = <a href="/type/messages.SearchResultsCalendar/" class="current_page_link">messages.SearchResultsCalendar</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.searchResultsCalendar/">messages.searchResultsCalendar</a></td><td>Information about found messages sent on a specific day</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSearchResultsCalendar/">messages.getSearchResultsCalendar</a></td><td>Returns information about the next messages of the specified type in the chat split by days.<br><br>Returns the results in reverse chronological order.<br>Can return partial results for the last returned day.</td></tr></tbody></table>
