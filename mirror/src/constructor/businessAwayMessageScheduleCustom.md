---
title: "businessAwayMessageScheduleCustom"
original: "https://core.telegram.org/constructor/businessAwayMessageScheduleCustom"
section: ref
description: "Send Telegram Business away messages to users writing to us in private in the specified time span."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessAwayMessageScheduleCustom","url":"/constructor/businessAwayMessageScheduleCustom/"}]
layout: layout.njk
---

# businessAwayMessageScheduleCustom

Send [Telegram Business away messages](/api/business/#away-messages) to users writing to us in private in the specified time span.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessAwayMessageScheduleCustom/" class="current_page_link">businessAwayMessageScheduleCustom</a>#cc4d9ecc start_date:<a href="/type/int/">int</a> end_date:<a href="/type/int/">int</a> = <a href="/type/BusinessAwayMessageSchedule/">BusinessAwayMessageSchedule</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Start date (UNIX timestamp).</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>End date (UNIX timestamp).</td></tr></tbody></table>

### Type

[BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
