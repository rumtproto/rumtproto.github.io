---
title: "updateBotChatInviteRequester"
original: "https://core.telegram.org/constructor/updateBotChatInviteRequester"
section: ref
description: "Someone has requested to join a chat or channel (bots only, users will receive an updatePendingJoinRequests, instead)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotChatInviteRequester","url":"/constructor/updateBotChatInviteRequester/"}]
layout: layout.njk
---

# updateBotChatInviteRequester

Someone has requested to join a chat or channel (bots only, users will receive an [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/), instead)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotChatInviteRequester/" class="current_page_link">updateBotChatInviteRequester</a>#11dfa986 peer:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> about:<a href="/type/string/">string</a> invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The chat or channel in question</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the <a href="/api/invites/#join-requests">join request »</a> made</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user ID that is asking to join the chat or channel</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Bio of the user</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>Chat invite link that was used by the user to send the <a href="/api/invites/#join-requests">join request »</a></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">QTS</a> event sequence identifier</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/)

Someone has requested to join a chat or channel
