---
title: "help.getTimezonesList"
original: "https://core.telegram.org/method/help.getTimezonesList"
section: ref
description: "Returns timezone information that may be used elsewhere in the API, such as to set Telegram Business opening hours »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getTimezonesList","url":"/method/help.getTimezonesList/"}]
layout: layout.njk
---

# help.getTimezonesList

Returns timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](/api/business/#opening-hours).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.timezonesListNotModified/">help.timezonesListNotModified</a>#970708cc = <a href="/type/help.TimezonesList/">help.TimezonesList</a>;
<a href="/constructor/help.timezonesList/">help.timezonesList</a>#7b74ed71 timezones:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Timezone/">Timezone</a>&gt; hash:<a href="/type/int/">int</a> = <a href="/type/help.TimezonesList/">help.TimezonesList</a>;
---functions---
<a href="/method/help.getTimezonesList/" class="current_page_link">help.getTimezonesList</a>#49b30240 hash:<a href="/type/int/">int</a> = <a href="/type/help.TimezonesList/">help.TimezonesList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.TimezonesList](/type/help.TimezonesList/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
