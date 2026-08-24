---
title: "SearchResultsCalendarPeriod"
original: "https://core.telegram.org/type/SearchResultsCalendarPeriod"
section: ref
description: "Information about found messages sent on a specific day, used to split the messages in messages.searchResultsCalendar constructors by days."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SearchResultsCalendarPeriod","url":"/type/SearchResultsCalendarPeriod/"}]
layout: layout.njk
---

# SearchResultsCalendarPeriod

Information about found messages sent on a specific day, used to split the `messages` in [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) constructors by days.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/searchResultsCalendarPeriod/">searchResultsCalendarPeriod</a>#c9b0539f date:<a href="/type/int/">int</a> min_msg_id:<a href="/type/int/">int</a> max_msg_id:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> = <a href="/type/SearchResultsCalendarPeriod/" class="current_page_link">SearchResultsCalendarPeriod</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/searchResultsCalendarPeriod/">searchResultsCalendarPeriod</a></td><td>Information about found messages sent on a specific day, used to split the <code>messages</code> in <a href="/constructor/messages.searchResultsCalendar/">messages.searchResultsCalendar</a> constructors by days.<br><br>Multiple searchResultsCalendarPeriod constructors are returned in <a href="/constructor/messages.searchResultsCalendar/">messages.searchResultsCalendar</a>, each containing information about the first, last and total number of messages matching the filter that were sent on a specific day.</td></tr></tbody></table>

### Related pages

#### [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/)

Information about found messages sent on a specific day
