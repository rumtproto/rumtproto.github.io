---
title: "messageActionChangeCreator"
original: "https://core.telegram.org/constructor/messageActionChangeCreator"
section: ref
description: "Service message: emitted to a supergroup when ownership transfer completes after the old owner left the group » (7 days after the old owner left without rejoining), indicating…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionChangeCreator","url":"/constructor/messageActionChangeCreator/"}]
layout: layout.njk
---

# messageActionChangeCreator

Service message: emitted to a supergroup when [ownership transfer completes after the old owner left the group »](/api/channel/#leaving-groups-channels) (7 days after the old owner left without rejoining), indicating that ownership has been transferred to a new owner.

Sent from the user ID of the old owner.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionChangeCreator/" class="current_page_link">messageActionChangeCreator</a>#e188503b new_creator_id:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>new_creator_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The ID of the user who became the new owner of the group/channel.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
