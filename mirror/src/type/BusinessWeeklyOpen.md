---
title: "BusinessWeeklyOpen"
original: "https://core.telegram.org/type/BusinessWeeklyOpen"
section: ref
description: "A time interval, indicating the opening hours of a Telegram Business."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessWeeklyOpen","url":"/type/BusinessWeeklyOpen/"}]
layout: layout.njk
---

# BusinessWeeklyOpen

A time interval, indicating the opening hours of a [Telegram Business](/api/business/#opening-hours).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessWeeklyOpen/">businessWeeklyOpen</a>#120b1ab9 start_minute:<a href="/type/int/">int</a> end_minute:<a href="/type/int/">int</a> = <a href="/type/BusinessWeeklyOpen/" class="current_page_link">BusinessWeeklyOpen</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessWeeklyOpen/">businessWeeklyOpen</a></td><td>A time interval, indicating the opening hours of a business.<br><br>Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified <a href="/api/business/#opening-hours">here »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
