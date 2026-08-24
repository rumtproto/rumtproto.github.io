---
title: "phone.getGroupCall"
original: "https://core.telegram.org/method/phone.getGroupCall"
section: ref
description: "Get info about a group call and its participants."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCall","url":"/method/phone.getGroupCall/"}]
layout: layout.njk
---

# phone.getGroupCall

Get info about a [group call](/api/group-calls/#getting-info-about-a-group-call) and its participants.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCall/">phone.groupCall</a>#9e727aad call:<a href="/type/GroupCall/">GroupCall</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; participants_next_offset:<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.GroupCall/">phone.GroupCall</a>;
---functions---
<a href="/method/phone.getGroupCall/" class="current_page_link">phone.getGroupCall</a>#41845db call:<a href="/type/InputGroupCall/">InputGroupCall</a> limit:<a href="/type/int/">int</a> = <a href="/type/phone.GroupCall/">phone.GroupCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Group call of any type to fetch</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of participants to return in this call (0 to return a server-defined amount).<br>If the number of returned participants is less than <a href="/constructor/groupCall/">groupCall</a>.<code>participants_count</code>, paginate through the remaining participants using <a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a>, passing to <code>offset</code> the <a href="/constructor/phone.groupCall/">phone.groupCall</a>.<code>participants_next_offset</code> returned by this call.<br>This parameter behaves in a different way compared to the <code>limit</code> of <a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a>, see <a href="/api/group-calls/#getting-info-about-a-group-call">here »</a> for more info.</td></tr></tbody></table>

### Result

[phone.GroupCall](/type/phone.GroupCall/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [groupCall](/constructor/groupCall/)

Describes a [group call](/api/group-calls/).

If the `min` flag is set, this is a partial (`min`) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-`min` constructor as described below. If no full (non-`min`) constructor for this call was cached previously, the `min` constructor must be discarded.

When `min` is set, the following mandatory fields may be used: `id`, `access_hash`, `participants_count` and `version`. In addition, **only** the following conditional fields may be used if present, subject to the usual `version` check:

-   `conference`
-   `rtmp_stream`
-   `listeners_hidden`
-   `title`
-   `messages_enabled`
-   `record_start_date` and `record_video_active`
-   `schedule_date`
-   `send_paid_messages_stars`

When `min` is set, the following fields **must be ignored**, keeping the values from the previously cached non-`min` constructor:

-   `join_muted`
-   `can_change_join_muted`
-   `schedule_start_subscribed`
-   `can_start_video`
-   `creator`
-   `can_change_messages_enabled`
-   `unmuted_video_count`
-   `unmuted_video_limit`
-   `stream_dc_id`
-   `invite_link`
-   `default_send_as`

The `join_date_asc` flag is set only when the call is created and never changes afterwards, so it too is not applied from a `min` constructor.

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](/api/group-calls/#getting-info-about-a-group-call) participants.

#### [phone.groupCall](/constructor/phone.groupCall/)

Contains group call information and an initial participant page, see [getting info about a group call »](/api/group-calls/#getting-info-about-a-group-call).

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
