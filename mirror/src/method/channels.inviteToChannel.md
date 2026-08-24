---
title: "channels.inviteToChannel"
original: "https://core.telegram.org/method/channels.inviteToChannel"
section: ref
description: "Invite users to a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.inviteToChannel","url":"/method/channels.inviteToChannel/"}]
layout: layout.njk
---

# channels.inviteToChannel

Invite users to a channel/supergroup

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.invitedUsers/">messages.invitedUsers</a>#7f5defa6 updates:<a href="/type/Updates/">Updates</a> missing_invitees:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MissingInvitee/">MissingInvitee</a>&gt; = <a href="/type/messages.InvitedUsers/">messages.InvitedUsers</a>;
---functions---
<a href="/method/channels.inviteToChannel/" class="current_page_link">channels.inviteToChannel</a>#c9e33d54 channel:<a href="/type/InputChannel/">InputChannel</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/messages.InvitedUsers/">messages.InvitedUsers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel/supergroup</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>Users to invite</td></tr></tbody></table>

### Result

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOTS_TOO_MUCH</td><td>There are too many bots in this chat/channel.</td></tr><tr><td>400</td><td>BOT_GROUPS_BLOCKED</td><td>This bot can't be added to groups.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel/#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Could not add participants.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>The maximum number of users has been exceeded (to create a chat, for example).</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>USER_BLOCKED</td><td>User blocked.</td></tr><tr><td>400</td><td>USER_BOT</td><td>Bots can only be admins in channels.</td></tr><tr><td>403</td><td>USER_CHANNELS_TOO_MUCH</td><td>One of the users you tried to add is already in too many channels/supergroups.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>400</td><td>USER_KICKED</td><td>This user was kicked from this supergroup/channel.</td></tr><tr><td>403</td><td>USER_NOT_MUTUAL_CONTACT</td><td>The provided user is not a mutual contact.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>The user's privacy settings do not allow you to do this.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
