---
title: "messageEntityFormattedDate"
original: "https://core.telegram.org/constructor/messageEntityFormattedDate"
section: ref
description: "Represents a specific point in time, rendered as specified here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityFormattedDate","url":"/constructor/messageEntityFormattedDate/"}]
layout: layout.njk
---

# messageEntityFormattedDate

Represents a specific point in time, rendered as specified [here »](/api/entities/#date-entities)

All flags are optional, with the following limitations:

-   `relative` cannot combined with any other flag
-   `short_time` and `long_time` cannot be combined with each other
-   `short_date` and `long_date` cannot be combined with each other

If any of the flags are combined, their rendering order in the text is the following:

-   `day_of_week`
-   `short_time`/`long_time`
-   `short_date`/`long_date`

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityFormattedDate/" class="current_page_link">messageEntityFormattedDate</a>#904ac7c7 flags:<a href="/type/%23/">#</a> relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>relative</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, render a relative date, see <a href="/api/entities/#date-entities">here »</a> for more info. Cannot be combined with any of the other flags.</td></tr><tr><td><strong>short_time</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Renders the time in short format: hours and minutes, according to the user's locale settings; cannot be combined with <code>long_time</code>.</td></tr><tr><td><strong>long_time</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Renders the time in long format: hours, minutes, seconds and maybe timezone, according to the user's locale settings; cannot be combined with <code>short_time</code>.</td></tr><tr><td><strong>short_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Renders the time in short format: month, date, (and year, if different from the current one), all according the user's locale settings; cannot be combined with <code>long_date</code>.</td></tr><tr><td><strong>long_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Renders the time in long format: always month, date and year, all according the user's locale settings; cannot be combined with <code>short_date</code>.</td></tr><tr><td><strong>day_of_week</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Renders the day of the week according to the user's locale settings.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The date as a UNIX timestamp: the allowed value ranges from <code>0</code> to the current date plus 1098 days (<code>time()+1098*86400</code>).</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
