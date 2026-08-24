---
title: "phone.groupCallStars"
original: "https://core.telegram.org/constructor/phone.groupCallStars"
section: ref
description: "Contains a live story's total donations and top donors, see paid live story donations »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.groupCallStars","url":"/constructor/phone.groupCallStars/"}]
layout: layout.njk
---

# phone.groupCallStars

Contains a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStars/" class="current_page_link">phone.groupCallStars</a>#9d1dbd26 total_stars:<a href="/type/long/">long</a> top_donors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallDonor/">GroupCallDonor</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.GroupCallStars/">phone.GroupCallStars</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>total_stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total Stars donated to the live story</td></tr><tr><td><strong>top_donors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallDonor/">GroupCallDonor</a>&gt;</td><td>Top donors</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in <code>top_donors</code></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in <code>top_donors</code></td></tr></tbody></table>

### Type

[phone.GroupCallStars](/type/phone.GroupCallStars/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
