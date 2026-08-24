---
title: "phone.ExportedGroupCallInvite"
original: "https://core.telegram.org/type/phone.ExportedGroupCallInvite"
section: ref
description: "An exported group call invitation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.ExportedGroupCallInvite","url":"/type/phone.ExportedGroupCallInvite/"}]
layout: layout.njk
---

# phone.ExportedGroupCallInvite

An exported group call invitation.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.exportedGroupCallInvite/">phone.exportedGroupCallInvite</a>#204bd158 link:<a href="/type/string/">string</a> = <a href="/type/phone.ExportedGroupCallInvite/" class="current_page_link">phone.ExportedGroupCallInvite</a>;

---functions---

<a href="/method/phone.exportGroupCallInvite/">phone.exportGroupCallInvite</a>#e6aa647f flags:<a href="/type/%23/">#</a> can_self_unmute:flags.0?true call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.ExportedGroupCallInvite/" class="current_page_link">phone.ExportedGroupCallInvite</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.exportedGroupCallInvite/">phone.exportedGroupCallInvite</a></td><td>An invite to a group call or livestream</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.exportGroupCallInvite/">phone.exportGroupCallInvite</a></td><td>Get an invite link for a public <a href="/api/group-calls/#video-chats-livestreams">video chat/livestream »</a>.<br><br>Non-admin members or subscribers may export a link with <code>can_self_unmute</code> omitted. Only group call admins may set <code>can_self_unmute</code> to export a link that allows users to speak.<br><br>Cannot be used for video chats/livestreams associated with private groups/channels, <a href="/api/group-calls/#conference-calls">conference calls »</a> or <a href="/api/group-calls/#live-stories">live stories »</a>.</td></tr></tbody></table>
