---
title: "messages.searchResultsPositions"
original: "https://core.telegram.org/constructor/messages.searchResultsPositions"
section: ref
description: "Information about sparse positions of messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.searchResultsPositions","url":"/constructor/messages.searchResultsPositions/"}]
layout: layout.njk
---

# messages.searchResultsPositions

Information about sparse positions of messages

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.searchResultsPositions/" class="current_page_link">messages.searchResultsPositions</a>#53b22baf count:<a href="/type/int/">int</a> positions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsPosition/">SearchResultsPosition</a>&gt; = <a href="/type/messages.SearchResultsPositions/">messages.SearchResultsPositions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of found messages</td></tr><tr><td><strong>positions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SearchResultsPosition/">SearchResultsPosition</a>&gt;</td><td>List of message positions</td></tr></tbody></table>

### Type

[messages.SearchResultsPositions](/type/messages.SearchResultsPositions/)
