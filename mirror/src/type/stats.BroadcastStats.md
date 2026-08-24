---
title: "Stats.BroadcastStats"
original: "https://core.telegram.org/type/stats.BroadcastStats"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Stats.BroadcastStats","url":"/type/stats.BroadcastStats/"}]
layout: layout.njk
---

# Stats.BroadcastStats

Channel statistics

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.broadcastStats/">stats.broadcastStats</a>#396ca5fc period:<a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a> followers:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> views_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> shares_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> reactions_per_post:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> views_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> shares_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> reactions_per_story:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> enabled_notifications:<a href="/type/StatsPercentValue/">StatsPercentValue</a> growth_graph:<a href="/type/StatsGraph/">StatsGraph</a> followers_graph:<a href="/type/StatsGraph/">StatsGraph</a> mute_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_hours_graph:<a href="/type/StatsGraph/">StatsGraph</a> interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> iv_interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> views_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> new_followers_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> languages_graph:<a href="/type/StatsGraph/">StatsGraph</a> reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> story_interactions_graph:<a href="/type/StatsGraph/">StatsGraph</a> story_reactions_by_emotion_graph:<a href="/type/StatsGraph/">StatsGraph</a> recent_posts_interactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PostInteractionCounters/">PostInteractionCounters</a>&gt; = <a href="/type/stats.BroadcastStats/" class="current_page_link">stats.BroadcastStats</a>;

---functions---

<a href="/method/stats.getBroadcastStats/">stats.getBroadcastStats</a>#ab42441a flags:<a href="/type/%23/">#</a> dark:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/stats.BroadcastStats/" class="current_page_link">stats.BroadcastStats</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stats.broadcastStats/">stats.broadcastStats</a></td><td><a href="/api/stats/">Channel statistics</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.getBroadcastStats/">stats.getBroadcastStats</a></td><td>Get <a href="/api/stats/">channel statistics</a></td></tr></tbody></table>
