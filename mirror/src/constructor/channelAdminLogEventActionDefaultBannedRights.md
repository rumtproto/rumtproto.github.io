---
title: "channelAdminLogEventActionDefaultBannedRights"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionDefaultBannedRights"
section: ref
description: "The default banned rights were modified"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionDefaultBannedRights","url":"/constructor/channelAdminLogEventActionDefaultBannedRights/"}]
layout: layout.njk
---

# channelAdminLogEventActionDefaultBannedRights

The default banned rights were modified

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionDefaultBannedRights/" class="current_page_link">channelAdminLogEventActionDefaultBannedRights</a>#2df5fc0a prev_banned_rights:<a href="/type/ChatBannedRights/">ChatBannedRights</a> new_banned_rights:<a href="/type/ChatBannedRights/">ChatBannedRights</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>Previous global <a href="/api/rights/">banned rights</a></td></tr><tr><td><strong>new_banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>New global <a href="/api/rights/">banned rights</a>.</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
