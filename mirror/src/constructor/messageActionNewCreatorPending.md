---
title: "messageActionNewCreatorPending"
original: "https://core.telegram.org/constructor/messageActionNewCreatorPending"
section: ref
description: "Service message: emitted to a supergroup when the group/channel creator leaves the group », indicating that ownership transfer is pending. The new_creator_id user will become the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionNewCreatorPending","url":"/constructor/messageActionNewCreatorPending/"}]
layout: layout.njk
---

# messageActionNewCreatorPending

Service message: emitted to a supergroup when the [group/channel creator leaves the group »](/api/channel/#leaving-groups-channels), indicating that ownership transfer is pending. The `new_creator_id` user will become the new owner after 7 days if the old owner does not rejoin.

Sent from the user ID of the old owner.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionNewCreatorPending/" class="current_page_link">messageActionNewCreatorPending</a>#b07ed085 new_creator_id:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>new_creator_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The ID of the user who will become the new owner of the group/channel after 7 days if the old owner does not rejoin.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
