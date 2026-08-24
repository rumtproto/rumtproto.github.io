---
title: "phone.getGroupCallStreamChannels"
original: "https://core.telegram.org/method/phone.getGroupCallStreamChannels"
section: ref
description: "Get the available stream channels and current playback timestamp of an RTMP-mode video chat, livestream or live story, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCallStreamChannels","url":"/method/phone.getGroupCallStreamChannels/"}]
layout: layout.njk
---

# phone.getGroupCallStreamChannels

Get the available stream channels and current playback timestamp of an RTMP-mode video chat, livestream or live story, see [here »](/api/group-calls/#rtmp-mode) for the full flow.  
The group call must be joined before invoking this method. Send the request to the media DC specified by [groupCall](/constructor/groupCall/).`stream_dc_id`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStreamChannels/">phone.groupCallStreamChannels</a>#d0e482b2 channels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallStreamChannel/">GroupCallStreamChannel</a>&gt; = <a href="/type/phone.GroupCallStreamChannels/">phone.GroupCallStreamChannels</a>;
---functions---
<a href="/method/phone.getGroupCallStreamChannels/" class="current_page_link">phone.getGroupCallStreamChannels</a>#1ab21940 call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.GroupCallStreamChannels/">phone.GroupCallStreamChannels</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>RTMP-mode video chat, livestream or live story</td></tr></tbody></table>

### Result

[phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>400</td><td>GROUPCALL_JOIN_MISSING</td><td>You haven't joined this group call.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

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
