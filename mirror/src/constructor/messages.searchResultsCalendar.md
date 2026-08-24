---
title: "messages.searchResultsCalendar"
original: "https://core.telegram.org/constructor/messages.searchResultsCalendar"
section: ref
description: "Information about found messages sent on a specific day"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.searchResultsCalendar","url":"/constructor/messages.searchResultsCalendar/"}]
layout: layout.njk
---

# messages.searchResultsCalendar

Information about found messages sent on a specific day

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchResultsCalendar/" class="current_page_link">messages.searchResultsCalendar</a>#147ee23c flags:<a href="/type/%23/">#</a> inexact:flags.0?true count:<a href="/type/int/">int</a> min_date:<a href="/type/int/">int</a> min_msg_id:<a href="/type/int/">int</a> offset_id_offset:flags.1?<a href="/type/int/">int</a> periods:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SearchResultsCalendar/">messages.SearchResultsCalendar</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, indicates that the results may be inexact</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results matching query</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Starting timestamp of attached messages</td></tr><tr><td><strong>min_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Ending timestamp of attached messages</td></tr><tr><td><strong>offset_id_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Indicates the absolute position of <code>messages[0]</code> within the total result set with count <code>count</code>.<br>This is useful, for example, if we need to display a <code>progress/total</code> counter (like <code>photo 134 of 200</code>, for all media in a chat, we could simply use <code>photo ${offset_id_offset} of ${count}</code>.</td></tr><tr><td><strong>periods</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a>&gt;</td><td>Used to split the <code>messages</code> by days: multiple <a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a> constructors are returned, each containing information about the first, last and total number of messages matching the filter that were sent on a specific day.<br>This information can be easily used to split the returned <code>messages</code> by day.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Messages</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

### Related pages

#### [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.
