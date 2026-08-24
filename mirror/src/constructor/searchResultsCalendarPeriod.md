---
title: "searchResultsCalendarPeriod"
original: "https://core.telegram.org/constructor/searchResultsCalendarPeriod"
section: ref
description: "Information about found messages sent on a specific day, used to split the messages in messages.searchResultsCalendar constructors by days."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"searchResultsCalendarPeriod","url":"/constructor/searchResultsCalendarPeriod/"}]
layout: layout.njk
---

# searchResultsCalendarPeriod

Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.

Multiple searchResultsCalendarPeriod constructors are returned in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/), each containing information about the first, last and total number of messages matching the filter that were sent on a specific day.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/searchResultsCalendarPeriod/" class="current_page_link">searchResultsCalendarPeriod</a>#c9b0539f date:<a href="/type/int/">int</a> min_msg_id:<a href="/type/int/">int</a> max_msg_id:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> = <a href="/type/SearchResultsCalendarPeriod/">SearchResultsCalendarPeriod</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The day this object is referring to.</td></tr><tr><td><strong>min_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>First message ID that was sent on this day.</td></tr><tr><td><strong>max_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Last message ID that was sent on this day.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>All messages that were sent on this day.</td></tr></tbody></table>

### Type

[SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

### Related pages

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Information about found messages sent on a specific day
