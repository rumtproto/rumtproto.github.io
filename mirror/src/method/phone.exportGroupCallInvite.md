---
title: "phone.exportGroupCallInvite"
original: "https://core.telegram.org/method/phone.exportGroupCallInvite"
section: ref
description: "Get an invite link for a public video chat/livestream »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.exportGroupCallInvite","url":"/method/phone.exportGroupCallInvite/"}]
layout: layout.njk
---

# phone.exportGroupCallInvite

Get an invite link for a public [video chat/livestream »](/api/group-calls/#video-chats-livestreams).

Non-admin members or subscribers may export a link with `can_self_unmute` omitted. Only group call admins may set `can_self_unmute` to export a link that allows users to speak.

Cannot be used for video chats/livestreams associated with private groups/channels, [conference calls »](/api/group-calls/#conference-calls) or [live stories »](/api/group-calls/#live-stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.exportedGroupCallInvite/">phone.exportedGroupCallInvite</a>#204bd158 link:<a href="/type/string/">string</a> = <a href="/type/phone.ExportedGroupCallInvite/">phone.ExportedGroupCallInvite</a>;
---functions---
<a href="/method/phone.exportGroupCallInvite/" class="current_page_link">phone.exportGroupCallInvite</a>#e6aa647f flags:<a href="/type/%23/">#</a> can_self_unmute:flags.0?true call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.ExportedGroupCallInvite/">phone.ExportedGroupCallInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_self_unmute</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>For public video chats/livestreams, group call admins only: allow users that join using this link to speak without explicitly requesting permission, for example by raising their hand.</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>The public <a href="/api/group-calls/#video-chats-livestreams">video chat/livestream »</a></td></tr></tbody></table>

### Result

[phone.ExportedGroupCallInvite](/type/phone.ExportedGroupCallInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>403</td><td>PUBLIC_CHANNEL_MISSING</td><td>You can only export group call invite links for public chats or channels.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
