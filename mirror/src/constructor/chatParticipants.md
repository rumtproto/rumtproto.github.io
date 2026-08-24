---
title: "chatParticipants"
original: "https://core.telegram.org/constructor/chatParticipants"
section: ref
description: "Contains the full list of members of basic groups »; is NOT usable for supergroups/channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatParticipants","url":"/constructor/chatParticipants/"}]
layout: layout.njk
---

# chatParticipants

Contains the full list of members of [basic groups »](/api/channel/#basic-groups); is **NOT** usable for supergroups/channels.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatParticipants/" class="current_page_link">chatParticipants</a>#3cbc93f8 chat_id:<a href="/type/long/">long</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatParticipant/">ChatParticipant</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/ChatParticipants/">ChatParticipants</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group identifier</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatParticipant/">ChatParticipant</a>&gt;</td><td>List of group members</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Group version number</td></tr></tbody></table>

### Type

[ChatParticipants](/type/ChatParticipants/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
