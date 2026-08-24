---
title: "messages.createChat"
original: "https://core.telegram.org/method/messages.createChat"
section: ref
description: "Changes the default value of the Time-To-Live setting, applied to all new chats."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.createChat","url":"/method/messages.createChat/"}]
layout: layout.njk
---

# messages.createChat

Creates a new chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.invitedUsers/">messages.invitedUsers</a>#7f5defa6 updates:<a href="/type/Updates/">Updates</a> missing_invitees:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MissingInvitee/">MissingInvitee</a>&gt; = <a href="/type/messages.InvitedUsers/">messages.InvitedUsers</a>;
---functions---
<a href="/method/messages.createChat/" class="current_page_link">messages.createChat</a>#92ceddd4 flags:<a href="/type/%23/">#</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; title:<a href="/type/string/">string</a> ttl_period:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.InvitedUsers/">messages.InvitedUsers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>List of user IDs to be invited</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Chat name</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Time-to-live of all messages that will be sent in the chat: once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use <a href="/method/messages.setDefaultHistoryTTL/">messages.setDefaultHistoryTTL</a> to edit this value later.</td></tr></tbody></table>

### Result

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>500</td><td>CHAT_ID_GENERATE_FAILED</td><td>Failure while generating the chat ID.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Could not add participants.</td></tr><tr><td>400</td><td>CHAT_TITLE_EMPTY</td><td>No chat title provided.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>The specified TTL period is invalid.</td></tr><tr><td>400</td><td>USERS_TOO_FEW</td><td>Not enough users (to create a chat, for example).</td></tr><tr><td>406</td><td>USER_RESTRICTED</td><td>You're spamreported, you can't create channels or chats.</td></tr></tbody></table>

### Related pages

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Changes the default value of the Time-To-Live setting, applied to all new chats.
