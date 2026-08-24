---
title: "stats.getMegagroupStats"
original: "https://core.telegram.org/method/stats.getMegagroupStats"
section: ref
description: "Get supergroup statistics"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getMegagroupStats","url":"/method/stats.getMegagroupStats/"}]
layout: layout.njk
---

# stats.getMegagroupStats

Get [supergroup statistics](/api/stats/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.megagroupStats/">stats.megagroupStats</a>#ef7ff916 period:<a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a> members:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> messages:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> viewers:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> posters:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> growth_graph:<a href="/type/StatsGraph/">StatsGraph</a> members_graph:<a href="/type/StatsGraph/">StatsGraph</a> new_members_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> languages_graph:<a href="/type/StatsGraph/">StatsGraph</a> messages_graph:<a href="/type/StatsGraph/">StatsGraph</a> actions_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_hours_graph:<a href="/type/StatsGraph/">StatsGraph</a> weekdays_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_posters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopPoster/">StatsGroupTopPoster</a>&gt; top_admins:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopAdmin/">StatsGroupTopAdmin</a>&gt; top_inviters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopInviter/">StatsGroupTopInviter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stats.MegagroupStats/">stats.MegagroupStats</a>;
---functions---
<a href="/method/stats.getMegagroupStats/" class="current_page_link">stats.getMegagroupStats</a>#dcdf8607 flags:<a href="/type/%23/">#</a> dark:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/stats.MegagroupStats/">stats.MegagroupStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable dark theme for graph colors</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td><a href="/api/channel/">Supergroup ID</a></td></tr></tbody></table>

### Result

[stats.MegagroupStats](/type/stats.MegagroupStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>MEGAGROUP_REQUIRED</td><td>You can only use this method on a supergroup.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
