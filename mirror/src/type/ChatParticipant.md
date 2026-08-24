---
title: "ChatParticipant"
original: "https://core.telegram.org/type/ChatParticipant"
section: ref
description: "Details of a group member."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatParticipant","url":"/type/ChatParticipant/"}]
layout: layout.njk
---

# ChatParticipant

Details of a group member.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatParticipant/">chatParticipant</a>#38e79fde flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChatParticipant/" class="current_page_link">ChatParticipant</a>;
<a href="/constructor/chatParticipantCreator/">chatParticipantCreator</a>#e1f867b8 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChatParticipant/" class="current_page_link">ChatParticipant</a>;
<a href="/constructor/chatParticipantAdmin/">chatParticipantAdmin</a>#360d5d2 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChatParticipant/" class="current_page_link">ChatParticipant</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipant/">chatParticipant</a></td><td><a href="/api/channel/#basic-groups">Basic group</a> member (not usable by supergroups).</td></tr><tr><td><a href="/constructor/chatParticipantCreator/">chatParticipantCreator</a></td><td>Represents the creator of the <a href="/api/channel/#basic-groups">basic group »</a></td></tr><tr><td><a href="/constructor/chatParticipantAdmin/">chatParticipantAdmin</a></td><td><a href="/api/channel/#basic-groups">Basic group</a> admin (not usable by supergroups).</td></tr></tbody></table>
