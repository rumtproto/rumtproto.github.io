---
title: "messages.getSearchResultsCalendar"
original: "https://core.telegram.org/method/messages.getSearchResultsCalendar"
section: ref
description: "Returns information about the next messages of the specified type in the chat split by days."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSearchResultsCalendar","url":"/method/messages.getSearchResultsCalendar/"}]
layout: layout.njk
---

# messages.getSearchResultsCalendar

Returns information about the next messages of the specified type in the chat split by days.

Returns the results in reverse chronological order.  
Can return partial results for the last returned day.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchResultsCalendar/">messages.searchResultsCalendar</a>#147ee23c flags:<a href="/type/%23/">#</a> inexact:flags.0?true count:<a href="/type/int/">int</a> min_date:<a href="/type/int/">int</a> min_msg_id:<a href="/type/int/">int</a> offset_id_offset:flags.1?<a href="/type/int/">int</a> periods:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SearchResultsCalendar/">messages.SearchResultsCalendar</a>;
---functions---
<a href="/method/messages.getSearchResultsCalendar/" class="current_page_link">messages.getSearchResultsCalendar</a>#6aa3f6bd flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> saved_peer_id:flags.2?<a href="/type/InputPeer/">InputPeer</a> filter:<a href="/type/MessagesFilter/">MessagesFilter</a> offset_id:<a href="/type/int/">int</a> offset_date:<a href="/type/int/">int</a> = <a href="/type/messages.SearchResultsCalendar/">messages.SearchResultsCalendar</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where to search</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputPeer/">InputPeer</a></td><td>Search within the <a href="/api/saved-messages/">saved message dialog »</a> with this ID.</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter/">MessagesFilter</a></td><td>Message filter, <a href="/constructor/inputMessagesFilterEmpty/">inputMessagesFilterEmpty</a>, <a href="/constructor/inputMessagesFilterMyMentions/">inputMessagesFilterMyMentions</a> filters are not supported by this method.</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr></tbody></table>

### Result

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/)

Filter is absent.

#### [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/)

Return only messages where the current user was [mentioned](/api/mentions/).

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
