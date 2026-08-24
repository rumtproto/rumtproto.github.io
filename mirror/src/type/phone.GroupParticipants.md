---
title: "phone.GroupParticipants"
original: "https://core.telegram.org/type/phone.GroupParticipants"
section: ref
description: "Info about the participants of a group call or livestream"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupParticipants","url":"/type/phone.GroupParticipants/"}]
layout: layout.njk
---

# phone.GroupParticipants

Info about the participants of a group call or livestream

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupParticipants/">phone.groupParticipants</a>#f47751b6 count:<a href="/type/int/">int</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; next_offset:<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; version:<a href="/type/int/">int</a> = <a href="/type/phone.GroupParticipants/" class="current_page_link">phone.GroupParticipants</a>;

---functions---

<a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a>#c558d8ab call:<a href="/type/InputGroupCall/">InputGroupCall</a> ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; sources:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/phone.GroupParticipants/" class="current_page_link">phone.GroupParticipants</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupParticipants/">phone.groupParticipants</a></td><td>Contains a page of group call participants, see <a href="/api/group-calls/#getting-info-about-a-group-call">getting info about a group call »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupParticipants/">phone.getGroupParticipants</a></td><td>Get <a href="/api/group-calls/#getting-info-about-a-group-call">group call</a> participants.</td></tr></tbody></table>
