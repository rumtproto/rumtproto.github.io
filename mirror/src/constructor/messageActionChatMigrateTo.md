---
title: "messageActionChatMigrateTo"
original: "https://core.telegram.org/constructor/messageActionChatMigrateTo"
section: ref
description: "Indicates the chat was migrated to the specified supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionChatMigrateTo","url":"/constructor/messageActionChatMigrateTo/"}]
layout: layout.njk
---

# messageActionChatMigrateTo

Indicates the chat was [migrated](/api/channel/) to the specified supergroup

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionChatMigrateTo/" class="current_page_link">messageActionChatMigrateTo</a>#e1037f92 channel_id:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The supergroup it was migrated to</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
