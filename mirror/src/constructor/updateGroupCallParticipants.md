---
title: "updateGroupCallParticipants"
original: "https://core.telegram.org/constructor/updateGroupCallParticipants"
section: ref
description: "The participant list of a group call has changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCallParticipants","url":"/constructor/updateGroupCallParticipants/"}]
layout: layout.njk
---

# updateGroupCallParticipants

The participant list of a [group call](/api/group-calls/#applying-group-call-updates) has changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateGroupCallParticipants/" class="current_page_link">updateGroupCallParticipants</a>#f2ebdb4e call:<a href="/type/InputGroupCall/">InputGroupCall</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Group call whose participants changed</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt;</td><td>Participants whose state changed</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Group call revision used by the <a href="/api/group-calls/#applying-group-call-updates">update application rules »</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
