---
title: "channelAdminLogEventActionParticipantEditRank"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantEditRank"
section: ref
description: "A participant's tag » was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionParticipantEditRank","url":"/constructor/channelAdminLogEventActionParticipantEditRank/"}]
layout: layout.njk
---

# channelAdminLogEventActionParticipantEditRank

A participant's [tag »](/api/rank/) was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionParticipantEditRank/" class="current_page_link">channelAdminLogEventActionParticipantEditRank</a>#5806b4ec user_id:<a href="/type/long/">long</a> prev_rank:<a href="/type/string/">string</a> new_rank:<a href="/type/string/">string</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user ID.</td></tr><tr><td><strong>prev_rank</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The previous tag.</td></tr><tr><td><strong>new_rank</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The new tag.</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
