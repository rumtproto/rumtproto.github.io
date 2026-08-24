---
title: "messageActionConferenceCall"
original: "https://core.telegram.org/constructor/messageActionConferenceCall"
section: ref
description: "Represents a conference call », or an invitation to one if neither the missed nor active flags are set."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionConferenceCall","url":"/constructor/messageActionConferenceCall/"}]
layout: layout.njk
---

# messageActionConferenceCall

Represents a [conference call »](/api/group-calls/#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](/api/config/#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionConferenceCall/" class="current_page_link">messageActionConferenceCall</a>#2ffe2f7a flags:<a href="/type/%23/">#</a> missed:flags.0?true active:flags.1?true video:flags.4?true call_id:<a href="/type/long/">long</a> duration:flags.2?<a href="/type/int/">int</a> other_participants:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>missed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the conference call has ended and the user hasn't joined.</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the user is currently in the conference call.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this is a video conference call.</td></tr><tr><td><strong>call_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Call ID.</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Call duration, for left calls only.</td></tr><tr><td><strong>other_participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>Identifiers of some other call participants.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Represents a [conference call »](/api/group-calls/#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](/api/config/#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.
