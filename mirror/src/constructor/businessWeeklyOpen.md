---
title: "businessWeeklyOpen"
original: "https://core.telegram.org/constructor/businessWeeklyOpen"
section: ref
description: "A time interval, indicating the opening hours of a business."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessWeeklyOpen","url":"/constructor/businessWeeklyOpen/"}]
layout: layout.njk
---

# businessWeeklyOpen

A time interval, indicating the opening hours of a business.

Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](/api/business/#opening-hours).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessWeeklyOpen/" class="current_page_link">businessWeeklyOpen</a>#120b1ab9 start_minute:<a href="/type/int/">int</a> end_minute:<a href="/type/int/">int</a> = <a href="/type/BusinessWeeklyOpen/">BusinessWeeklyOpen</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>start_minute</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Start minute in minutes of the week, <code>0</code> to <code>7*24*60</code> inclusively.</td></tr><tr><td><strong>end_minute</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>End minute in minutes of the week, <code>1</code> to <code>8*24*60</code> inclusively (<code>8</code> and not <code>7</code> because this allows to specify intervals that, for example, start on <code>Sunday 21:00</code> and end on <code>Monday 04:00</code> (<code>6*24*60+21*60</code> to <code>7*24*60+4*60</code>) without passing an invalid <code>end_minute &lt; start_minute</code>). See <a href="/api/business/#opening-hours">here »</a> for more info.</td></tr></tbody></table>

### Type

[BusinessWeeklyOpen](/type/BusinessWeeklyOpen/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
