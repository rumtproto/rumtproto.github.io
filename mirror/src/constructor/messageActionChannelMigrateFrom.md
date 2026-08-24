---
title: "messageActionChannelMigrateFrom"
original: "https://core.telegram.org/constructor/messageActionChannelMigrateFrom"
section: ref
description: "Indicates the channel was migrated from the specified chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionChannelMigrateFrom","url":"/constructor/messageActionChannelMigrateFrom/"}]
layout: layout.njk
---

# messageActionChannelMigrateFrom

Indicates the channel was [migrated](/api/channel/) from the specified chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionChannelMigrateFrom/" class="current_page_link">messageActionChannelMigrateFrom</a>#ea3948e9 title:<a href="/type/string/">string</a> chat_id:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The old chat title</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The old chat ID</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
