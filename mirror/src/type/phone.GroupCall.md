---
title: "phone.GroupCall"
original: "https://core.telegram.org/type/phone.GroupCall"
section: ref
description: "Contains info about a group call, and partial info about its participants."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupCall","url":"/type/phone.GroupCall/"}]
layout: layout.njk
---

# phone.GroupCall

Contains info about a group call, and partial info about its participants.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCall/">phone.groupCall</a>#9e727aad call:<a href="/type/GroupCall/">GroupCall</a> participants:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallParticipant/">GroupCallParticipant</a>&gt; participants_next_offset:<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.GroupCall/" class="current_page_link">phone.GroupCall</a>;

---functions---

<a href="/method/phone.getGroupCall/">phone.getGroupCall</a>#41845db call:<a href="/type/InputGroupCall/">InputGroupCall</a> limit:<a href="/type/int/">int</a> = <a href="/type/phone.GroupCall/" class="current_page_link">phone.GroupCall</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCall/">phone.groupCall</a></td><td>Contains group call information and an initial participant page, see <a href="/api/group-calls/#getting-info-about-a-group-call">getting info about a group call »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCall/">phone.getGroupCall</a></td><td>Get info about a <a href="/api/group-calls/#getting-info-about-a-group-call">group call</a> and its participants.</td></tr></tbody></table>
