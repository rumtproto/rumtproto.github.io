---
title: "phone.getGroupParticipants"
original: "https://core.telegram.org/method/phone.getGroupParticipants"
section: ref
description: "Get group call participants."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupParticipants","url":"/method/phone.getGroupParticipants/"}]
layout: layout.njk
---

# phone.getGroupParticipants

Get [group call](/api/group-calls/#getting-info-about-a-group-call) participants.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupParticipants/">phone.groupParticipants</a>#f47751b6 count:<a href="/type/int/">int</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; next_offset:<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/phone.GroupParticipants/">phone.GroupParticipants</a>;
---functions---
<a href="/method/phone.getGroupParticipants/" class="current_page_link">phone.getGroupParticipants</a>#c558d8ab call:<a href="/type/InputGroupCall/">InputGroupCall</a> ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; sources:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/phone.GroupParticipants/">phone.GroupParticipants</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Group call whose participants should be fetched</td></tr><tr><td><strong>ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>If specified, will fetch group participant info about the specified peers</td></tr><tr><td><strong>sources</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If specified, will fetch group participant info about the specified WebRTC source IDs</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for results, taken from the <code>next_offset</code> field of <a href="/constructor/phone.groupParticipants/">phone.groupParticipants</a> or the <code>participants_next_offset</code> field of <a href="/constructor/phone.groupCall/">phone.groupCall</a>, initially an empty string.<br>Note: if no more results are available, the method call will return an empty <code>next_offset</code>; thus, avoid providing the <code>next_offset</code> returned in <a href="/constructor/phone.groupParticipants/">phone.groupParticipants</a> if it is empty, to avoid an infinite loop.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[phone.GroupParticipants](/type/phone.GroupParticipants/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [phone.groupParticipants](/constructor/phone.groupParticipants/)

Contains a page of group call participants, see [getting info about a group call »](/api/group-calls/#getting-info-about-a-group-call).

#### [phone.groupCall](/constructor/phone.groupCall/)

Contains group call information and an initial participant page, see [getting info about a group call »](/api/group-calls/#getting-info-about-a-group-call).

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
