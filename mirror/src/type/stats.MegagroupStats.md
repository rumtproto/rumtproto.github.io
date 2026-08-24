---
title: "stats.MegagroupStats"
original: "https://core.telegram.org/type/stats.MegagroupStats"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stats.MegagroupStats","url":"/type/stats.MegagroupStats/"}]
layout: layout.njk
---

# stats.MegagroupStats

Supergroup statistics

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.megagroupStats/">stats.megagroupStats</a>#ef7ff916 period:<a href="/type/StatsDateRangeDays/">StatsDateRangeDays</a> members:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> messages:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> viewers:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> posters:<a href="/type/StatsAbsValueAndPrev/">StatsAbsValueAndPrev</a> growth_graph:<a href="/type/StatsGraph/">StatsGraph</a> members_graph:<a href="/type/StatsGraph/">StatsGraph</a> new_members_by_source_graph:<a href="/type/StatsGraph/">StatsGraph</a> languages_graph:<a href="/type/StatsGraph/">StatsGraph</a> messages_graph:<a href="/type/StatsGraph/">StatsGraph</a> actions_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_hours_graph:<a href="/type/StatsGraph/">StatsGraph</a> weekdays_graph:<a href="/type/StatsGraph/">StatsGraph</a> top_posters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopPoster/">StatsGroupTopPoster</a>&gt; top_admins:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopAdmin/">StatsGroupTopAdmin</a>&gt; top_inviters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StatsGroupTopInviter/">StatsGroupTopInviter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stats.MegagroupStats/" class="current_page_link">stats.MegagroupStats</a>;

---functions---

<a href="/method/stats.getMegagroupStats/">stats.getMegagroupStats</a>#dcdf8607 flags:<a href="/type/%23/">#</a> dark:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/stats.MegagroupStats/" class="current_page_link">stats.MegagroupStats</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stats.megagroupStats/">stats.megagroupStats</a></td><td>Supergroup <a href="/api/stats/">statistics</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.getMegagroupStats/">stats.getMegagroupStats</a></td><td>Get <a href="/api/stats/">supergroup statistics</a></td></tr></tbody></table>
