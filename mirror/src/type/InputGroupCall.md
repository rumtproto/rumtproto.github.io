---
title: "InputGroupCall"
original: "https://core.telegram.org/type/InputGroupCall"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputGroupCall","url":"/type/InputGroupCall/"}]
layout: layout.njk
---

# InputGroupCall

Indicates a group call

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGroupCall/">inputGroupCall</a>#d8aa840f id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputGroupCall/" class="current_page_link">InputGroupCall</a>;
<a href="/constructor/inputGroupCallSlug/">inputGroupCallSlug</a>#fe06823f slug:<a href="/type/string/">string</a> = <a href="/type/InputGroupCall/" class="current_page_link">InputGroupCall</a>;
<a href="/constructor/inputGroupCallInviteMessage/">inputGroupCallInviteMessage</a>#8c10603f msg_id:<a href="/type/int/">int</a> = <a href="/type/InputGroupCall/" class="current_page_link">InputGroupCall</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputGroupCall/">inputGroupCall</a></td><td>Points to a specific <a href="/api/group-calls/">group call</a>.</td></tr><tr><td><a href="/constructor/inputGroupCallSlug/">inputGroupCallSlug</a></td><td>Identify a <a href="/api/group-calls/#conference-calls">conference call »</a> using the slug from its invitation link.<br><br>This constructor can only be used for conference calls. It cannot be used for video chats/livestreams, live stories or any other group call type.</td></tr><tr><td><a href="/constructor/inputGroupCallInviteMessage/">inputGroupCallInviteMessage</a></td><td>Identifies a <a href="/api/group-calls/#conference-calls">conference call »</a> using its <a href="/constructor/messageActionConferenceCall/">messageActionConferenceCall</a> invitation service message.</td></tr></tbody></table>
