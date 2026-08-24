---
title: "updateChannelTooLong"
original: "https://core.telegram.org/constructor/updateChannelTooLong"
section: ref
description: "There are new updates in the specified channel, the client must fetch them manually by invoking updates.getChannelDifference as specified in the documentation »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelTooLong","url":"/constructor/updateChannelTooLong/"}]
layout: layout.njk
---

# updateChannelTooLong

There are new updates in the specified channel, the client must fetch them manually by invoking [updates.getChannelDifference](/method/updates.getChannelDifference/) as specified in the [documentation »](/api/updates/).

If the channel's PTS isn't currently stored in the database (i.e. we joined this channel on another client while the current client was offline), start fetching from the specified pts.

Does **not** necessarily indicate the [channel message box size limit was reached](/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelTooLong/" class="current_page_link">updateChannelTooLong</a>#108d941f flags:<a href="/type/%23/">#</a> channel_id:<a href="/type/long/">long</a> pts:flags.0?<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The channel</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>The <a href="/api/updates/">PTS</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updates.getChannelDifference](/method/updates.getChannelDifference/)

Returns the difference between the current state of updates of a certain channel and transmitted.
