---
title: "updatesTooLong"
original: "https://core.telegram.org/constructor/updatesTooLong"
section: ref
description: "The number of queued updates in the common message box is too large to be delivered passively through the socket, invoke updates.getDifference to fetch the difference as specified…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatesTooLong","url":"/constructor/updatesTooLong/"}]
layout: layout.njk
---

# updatesTooLong

The number of queued updates in the common message box is too large to be delivered passively through the socket, invoke [updates.getDifference](/method/updates.getDifference/) to fetch the difference as specified in the [documentation »](/api/updates/).

Does **not** necessarily indicate the [message box size limit was reached](/api/updates/#recovering-gaps-for-very-old-messages), it simply indicates that the number of queued updates in a message box is too large to be delivered passively through the socket.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/" class="current_page_link">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[Updates](/type/Updates/)

### Related pages

#### [updates.getDifference](/method/updates.getDifference/)

Get new [updates](/api/updates/).

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
