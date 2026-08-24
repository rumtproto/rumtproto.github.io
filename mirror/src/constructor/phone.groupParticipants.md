---
title: "phone.groupParticipants"
original: "https://core.telegram.org/constructor/phone.groupParticipants"
section: ref
description: "Contains a page of group call participants, see getting info about a group call »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.groupParticipants","url":"/constructor/phone.groupParticipants/"}]
layout: layout.njk
---

# phone.groupParticipants

Contains a page of group call participants, see [getting info about a group call »](/api/group-calls/#getting-info-about-a-group-call).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupParticipants/" class="current_page_link">phone.groupParticipants</a>#f47751b6 count:<a href="/type/int/">int</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; next_offset:<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/phone.GroupParticipants/">phone.GroupParticipants</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of participants</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt;</td><td>List of participants</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>If not empty, the specified list of participants is partial, and more participants can be fetched specifying this parameter as <code>offset</code> in <a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Current participant-list version, used to apply and detect gaps in versioned <a href="/constructor/updateGroupCallParticipants/">updateGroupCallParticipants</a> updates</td></tr></tbody></table>

### Type

[phone.GroupParticipants](/type/phone.GroupParticipants/)

### Related pages

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](/api/group-calls/#getting-info-about-a-group-call) participants.

#### [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/)

The participant list of a [group call](/api/group-calls/#applying-group-call-updates) has changed.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
