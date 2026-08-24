---
title: "channels.reportAntiSpamFalsePositive"
original: "https://core.telegram.org/method/channels.reportAntiSpamFalsePositive"
section: ref
description: "Report a native antispam false positive"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.reportAntiSpamFalsePositive","url":"/method/channels.reportAntiSpamFalsePositive/"}]
layout: layout.njk
---

# channels.reportAntiSpamFalsePositive

Report a [native antispam](/api/antispam/) false positive

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.reportAntiSpamFalsePositive/" class="current_page_link">channels.reportAntiSpamFalsePositive</a>#a850a693 channel:<a href="/type/InputChannel/">InputChannel</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Supergroup ID</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID that was mistakenly deleted by the <a href="/api/antispam/">native antispam</a> system, taken from the <a href="/api/recent-actions/">admin log</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [Native antispam system](/api/antispam/)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.

#### [Admin log](/api/recent-actions/)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.
