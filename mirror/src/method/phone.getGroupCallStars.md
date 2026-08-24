---
title: "phone.getGroupCallStars"
original: "https://core.telegram.org/method/phone.getGroupCallStars"
section: ref
description: "Fetch a live story's total donations and top donors, see paid live story donations »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCallStars","url":"/method/phone.getGroupCallStars/"}]
layout: layout.njk
---

# phone.getGroupCallStars

Fetch a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStars/">phone.groupCallStars</a>#9d1dbd26 total_stars:<a href="/type/long/">long</a> top_donors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallDonor/">GroupCallDonor</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.GroupCallStars/">phone.GroupCallStars</a>;
---functions---
<a href="/method/phone.getGroupCallStars/" class="current_page_link">phone.getGroupCallStars</a>#6f636302 call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.GroupCallStars/">phone.GroupCallStars</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Live story group call</td></tr></tbody></table>

### Result

[phone.GroupCallStars](/type/phone.GroupCallStars/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
