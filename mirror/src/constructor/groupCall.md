---
title: "groupCall"
original: "https://core.telegram.org/constructor/groupCall"
section: ref
description: "If the min flag is set, this is a partial (min) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-min…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCall","url":"/constructor/groupCall/"}]
layout: layout.njk
---

# groupCall

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

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCall/" class="current_page_link">groupCall</a>#efb2b617 flags:<a href="/type/%23/">#</a> join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> participants_count:<a href="/type/int/">int</a> title:flags.3?<a href="/type/string/">string</a> stream_dc_id:flags.4?<a href="/type/int/">int</a> record_start_date:flags.5?<a href="/type/int/">int</a> schedule_date:flags.7?<a href="/type/int/">int</a> unmuted_video_count:flags.10?<a href="/type/int/">int</a> unmuted_video_limit:<a href="/type/int/">int</a> version:<a href="/type/int/">int</a> invite_link:flags.16?<a href="/type/string/">string</a> send_paid_messages_stars:flags.20?<a href="/type/long/">long</a> default_send_as:flags.21?<a href="/type/Peer/">Peer</a> = <a href="/type/GroupCall/">GroupCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>join_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the user should be muted upon joining the call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>can_change_join_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the current user can change the value of the <code>join_muted</code> flag using <a href="/method/phone.toggleGroupCallSettings/">phone.toggleGroupCallSettings</a>. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>join_date_asc</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Specifies the ordering to use when locally sorting by date and displaying in the UI group call participants. Set only when the call is created and never changed afterwards, so it is not applied from a <code>min</code> constructor.</td></tr><tr><td><strong>schedule_start_subscribed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether we subscribed to the scheduled call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>can_start_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether you can start streaming video into the call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>record_video_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether the group call is currently being recorded</td></tr><tr><td><strong>rtmp_stream</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>Whether this call uses <a href="/api/group-calls/#stream-mode">RTMP livestream mode »</a></td></tr><tr><td><strong>listeners_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether the listeners list is hidden and cannot be fetched using <a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a>. The <code>phone.groupParticipants.count</code> and <code>groupCall.participants_count</code> counters will still include listeners.</td></tr><tr><td><strong>conference</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Whether this is an E2E conference call.</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/constructor/true/">true</a></td><td>Whether the current user created this group call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>messages_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/constructor/true/">true</a></td><td>Whether the <a href="/api/group-calls/#in-call-messages">in-call message overlay »</a> is enabled</td></tr><tr><td><strong>can_change_messages_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/constructor/true/">true</a></td><td>Whether the current user may enable or disable the <a href="/api/group-calls/#in-call-messages">in-call message overlay »</a>. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>Whether this is a partial constructor that must be merged into a previously cached non-<code>min</code> constructor, following the rules described above.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group call ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group call access hash</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Participant count</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Group call title</td></tr><tr><td><strong>stream_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Media DC ID to use for <a href="/api/group-calls/#downloading-media-chunks">RTMP stream requests »</a>. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>record_start_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>When was the recording started</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/int/">int</a></td><td>When is the call scheduled to start</td></tr><tr><td><strong>unmuted_video_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Number of people currently streaming video into the call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>unmuted_video_limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of people allowed to stream video into the call. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Revision used to apply <a href="/api/group-calls/#applying-group-call-updates">group call updates »</a></td></tr><tr><td><strong>invite_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/string/">string</a></td><td>Invitation link for a <a href="/api/group-calls/#conference-calls">conference call »</a>. Must be ignored if the <code>min</code> flag is set.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/type/long/">long</a></td><td>Minimum Stars donation required from users other than the live story owner to send a <a href="/api/group-calls/#paid-live-story-comments">paid comment »</a>; <code>0</code> or no value allows free comments</td></tr><tr><td><strong>default_send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/type/Peer/">Peer</a></td><td>Default peer displayed as the author of <a href="/api/group-calls/#in-call-messages">live story comments and reactions »</a>. Must be ignored if the <code>min</code> flag is set.</td></tr></tbody></table>

### Type

[GroupCall](/type/GroupCall/)

### Related pages

#### [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)

Change group call settings. Each setting supports different group call types, see [here »](/api/group-calls/#managing-an-active-group-call) for more info.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](/api/group-calls/#getting-info-about-a-group-call) participants.
