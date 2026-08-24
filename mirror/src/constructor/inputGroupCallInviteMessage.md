---
title: "inputGroupCallInviteMessage"
original: "https://core.telegram.org/constructor/inputGroupCallInviteMessage"
section: ref
description: "Identifies a conference call » using its messageActionConferenceCall invitation service message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputGroupCallInviteMessage","url":"/constructor/inputGroupCallInviteMessage/"}]
layout: layout.njk
---

# inputGroupCallInviteMessage

Identifies a [conference call »](/api/group-calls/#conference-calls) using its [messageActionConferenceCall](/constructor/messageActionConferenceCall/) invitation service message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGroupCallInviteMessage/" class="current_page_link">inputGroupCallInviteMessage</a>#8c10603f msg_id:<a href="/type/int/">int</a> = <a href="/type/InputGroupCall/">InputGroupCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the <a href="/constructor/messageActionConferenceCall/">messageActionConferenceCall</a>.</td></tr></tbody></table>

### Type

[InputGroupCall](/type/InputGroupCall/)

### Related pages

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Represents a [conference call »](/api/group-calls/#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](/api/config/#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
