---
title: "stats.megagroupStats"
original: "https://core.telegram.org/constructor/stats.megagroupStats"
section: ref
description: "Telegram offers detailed channel statistics for channels and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stats.megagroupStats","url":"/constructor/stats.megagroupStats/"}]
layout: layout.njk
---

# stats.megagroupStats

Supergroup [statistics](/api/stats/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.megagroupStats/" class="current_page_link">stats.megagroupStats</a>#ef7ff916 period:<a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a> members:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> messages:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> viewers:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> posters:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> growth_graph:<a href="/type/StatsGraph/">StatsGraph</a> members_graph:<a href="/type/StatsGraph/">StatsGraph</a> new_members_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> languages_graph:<a href="/type/StatsGraph/">StatsGraph</a> messages_graph:<a href="/type/StatsGraph/">StatsGraph</a> actions_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_hours_graph:<a href="/type/StatsGraph/">StatsGraph</a> weekdays_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_posters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopPoster/">StatsGroupTopPoster</a>&gt; top_admins:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopAdmin/">StatsGroupTopAdmin</a>&gt; top_inviters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopInviter/">StatsGroupTopInviter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stats.MegagroupStats/">stats.MegagroupStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a></td><td>Period in consideration</td></tr><tr><td><strong>members</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a></td><td>Member count change for period in consideration</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a></td><td>Message number change for period in consideration</td></tr><tr><td><strong>viewers</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a></td><td>Number of users that viewed messages, for range in consideration</td></tr><tr><td><strong>posters</strong></td><td style="text-align: center;"><a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a></td><td>Number of users that posted messages, for range in consideration</td></tr><tr><td><strong>growth_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Supergroup growth graph (absolute subscriber count)</td></tr><tr><td><strong>members_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Members growth (relative subscriber count)</td></tr><tr><td><strong>new_members_by_source_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>New members by source graph</td></tr><tr><td><strong>languages_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Subscriber language graph (pie chart)</td></tr><tr><td><strong>messages_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Message activity graph (stacked bar graph, message type)</td></tr><tr><td><strong>actions_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Group activity graph (deleted, modified messages, blocked users)</td></tr><tr><td><strong>top_hours_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Activity per hour graph (absolute)</td></tr><tr><td><strong>weekdays_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph/">StatsGraph</a></td><td>Activity per day of week graph (absolute)</td></tr><tr><td><strong>top_posters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopPoster/">StatsGroupTopPoster</a>&gt;</td><td>Info about most active group members</td></tr><tr><td><strong>top_admins</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopAdmin/">StatsGroupTopAdmin</a>&gt;</td><td>Info about most active group admins</td></tr><tr><td><strong>top_inviters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopInviter/">StatsGroupTopInviter</a>&gt;</td><td>Info about most active group inviters</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Info about users mentioned in statistics</td></tr></tbody></table>

### Type

[stats.MegagroupStats](/type/stats.MegagroupStats/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
