---
title: "businessWorkHours"
original: "https://core.telegram.org/constructor/businessWorkHours"
section: ref
description: "Specifies a set of Telegram Business opening hours."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessWorkHours","url":"/constructor/businessWorkHours/"}]
layout: layout.njk
---

# businessWorkHours

Specifies a set of [Telegram Business opening hours](/api/business/#opening-hours).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessWorkHours/" class="current_page_link">businessWorkHours</a>#8c92b098 flags:<a href="/type/%23/">#</a> open_now:flags.0?true timezone_id:<a href="/type/string/">string</a> weekly_open:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BusinessWeeklyOpen/">BusinessWeeklyOpen</a>&gt; = <a href="/type/BusinessWorkHours/">BusinessWorkHours</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>open_now</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Ignored if set while invoking <a href="/method/account.updateBusinessWorkHours/">account.updateBusinessWorkHours</a>, only returned by the server in <a href="/constructor/userFull/">userFull</a>.<code>business_work_hours</code>, indicating whether the business is currently open according to the current time and the values in <code>weekly_open</code> and <code>timezone</code>.</td></tr><tr><td><strong>timezone_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>An ID of one of the timezones returned by <a href="/method/help.getTimezonesList/">help.getTimezonesList</a>.<br>The timezone ID is contained <a href="/constructor/timezone/">timezone</a>.<code>id</code>, a human-readable, localized name of the timezone is available in <a href="/constructor/timezone/">timezone</a>.<code>name</code> and the <a href="/constructor/timezone/">timezone</a>.<code>utc_offset</code> field contains the UTC offset in seconds, which may be displayed in hh:mm format by the client together with the human-readable name (i.e. <code>$name UTC -01:00</code>).</td></tr><tr><td><strong>weekly_open</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BusinessWeeklyOpen/">BusinessWeeklyOpen</a>&gt;</td><td>A list of time intervals (max 28) represented by <a href="/constructor/businessWeeklyOpen/">businessWeeklyOpen »</a>, indicating the opening hours of their business.</td></tr></tbody></table>

### Type

[BusinessWorkHours](/type/BusinessWorkHours/)

### Related pages

#### [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/)

Specify a set of [Telegram Business opening hours](/api/business/#opening-hours).  
This info will be contained in [userFull](/constructor/userFull/).`business_work_hours`.

To remove all opening hours, invoke the method without setting the `business_work_hours` field.

Note that the opening hours specified by the user must be appropriately validated and transformed before invoking the method, as specified [here »](/api/business/#opening-hours).

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [help.getTimezonesList](/method/help.getTimezonesList/)

Returns timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](/api/business/#opening-hours).

#### [timezone](/constructor/timezone/)

Timezone information.

#### [businessWeeklyOpen](/constructor/businessWeeklyOpen/)

A time interval, indicating the opening hours of a business.

Note that opening hours specified by the user must be appropriately validated and transformed before uploading them to the server, as specified [here »](/api/business/#opening-hours).

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
