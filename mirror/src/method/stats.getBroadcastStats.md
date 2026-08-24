---
title: "stats.getBroadcastStats"
original: "https://core.telegram.org/method/stats.getBroadcastStats"
section: ref
description: "Telegram offers detailed channel statistics for channels and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getBroadcastStats","url":"/method/stats.getBroadcastStats/"}]
layout: layout.njk
---

# stats.getBroadcastStats

Get [channel statistics](/api/stats/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.broadcastStats/">stats.broadcastStats</a>#396ca5fc period:<a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a> followers:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> views_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> shares_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> reactions_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> views_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> shares_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> reactions_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> enabled_notifications:<a href="/type/StatsPercentValue/">StatsPercentValue</a> growth_graph:<a href="/type/StatsGraph/">StatsGraph</a> followers_graph:<a href="/type/StatsGraph/">StatsGraph</a> mute_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_hours_graph:<a href="/type/StatsGraph/">StatsGraph</a> interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> iv_interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> views_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> new_followers_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> languages_graph:<a href="/type/StatsGraph/">StatsGraph</a> reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> story_interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> story_reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> recent_posts_interactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PostInteractionCounters/">PostInteractionCounters</a>&gt; = <a href="/type/stats.BroadcastStats/">stats.BroadcastStats</a>;
---functions---
<a href="/method/stats.getBroadcastStats/" class="current_page_link">stats.getBroadcastStats</a>#ab42441a flags:<a href="/type/%23/">#</a> dark:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/stats.BroadcastStats/">stats.BroadcastStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable dark theme for graph colors</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The channel</td></tr></tbody></table>

### Result

[stats.BroadcastStats](/type/stats.BroadcastStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BROADCAST_REQUIRED</td><td>This method can only be called on a channel, please use stats.getMegagroupStats for supergroups.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr></tbody></table>

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
