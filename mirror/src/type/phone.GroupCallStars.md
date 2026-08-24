---
title: "Phone.GroupCallStars"
original: "https://core.telegram.org/type/phone.GroupCallStars"
section: ref
description: "Contains a live story's total donations and top donors, see paid live story donations »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Phone.GroupCallStars","url":"/type/phone.GroupCallStars/"}]
layout: layout.njk
---

# Phone.GroupCallStars

Contains a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStars/">phone.groupCallStars</a>#9d1dbd26 total_stars:<a href="/type/long/">long</a> top_donors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallDonor/">GroupCallDonor</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.GroupCallStars/" class="current_page_link">phone.GroupCallStars</a>;

---functions---

<a href="/method/phone.getGroupCallStars/">phone.getGroupCallStars</a>#6f636302 call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.GroupCallStars/" class="current_page_link">phone.GroupCallStars</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStars/">phone.groupCallStars</a></td><td>Contains a live story's total donations and top donors, see <a href="/api/group-calls/#paid-live-story-donations">paid live story donations »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStars/">phone.getGroupCallStars</a></td><td>Fetch a live story's total donations and top donors, see <a href="/api/group-calls/#paid-live-story-donations">paid live story donations »</a>.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
