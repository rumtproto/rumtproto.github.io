---
title: "updatePendingJoinRequests"
original: "https://core.telegram.org/constructor/updatePendingJoinRequests"
section: ref
description: "Someone has requested to join a chat or channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePendingJoinRequests","url":"/constructor/updatePendingJoinRequests/"}]
layout: layout.njk
---

# updatePendingJoinRequests

Someone has requested to join a chat or channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePendingJoinRequests/" class="current_page_link">updatePendingJoinRequests</a>#7063c3db peer:<a href="/type/Peer/">Peer</a> requests_pending:<a href="/type/int/">int</a> recent_requesters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Chat or channel</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of pending <a href="/api/invites/#join-requests">join requests »</a> for the chat or channel</td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>IDs of users that have recently requested to join</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
