---
title: "ChatParticipants"
original: "https://core.telegram.org/type/ChatParticipants"
section: ref
description: "Contains the full list of members of basic groups »; is NOT usable for supergroups/channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatParticipants","url":"/type/ChatParticipants/"}]
layout: layout.njk
---

# ChatParticipants

Contains the full list of members of [basic groups »](/api/channel/#basic-groups); is **NOT** usable for supergroups/channels.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatParticipantsForbidden/">chatParticipantsForbidden</a>#8763d3e1 flags:<a href="/type/%23/">#</a> chat_id:<a href="/type/long/">long</a> self_participant:flags.0?<a href="/type/ChatParticipant/">ChatParticipant</a> = <a href="/type/ChatParticipants/" class="current_page_link">ChatParticipants</a>;
<a href="/constructor/chatParticipants/">chatParticipants</a>#3cbc93f8 chat_id:<a href="/type/long/">long</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatParticipant/">ChatParticipant</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/ChatParticipants/" class="current_page_link">ChatParticipants</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipantsForbidden/">chatParticipantsForbidden</a></td><td>The full list of members of <a href="/api/channel/#basic-groups">basic groups »</a> is not available to you, because you were banned.</td></tr><tr><td><a href="/constructor/chatParticipants/">chatParticipants</a></td><td>Contains the full list of members of <a href="/api/channel/#basic-groups">basic groups »</a>; is <strong>NOT</strong> usable for supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
