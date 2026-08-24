---
title: "messages.InvitedUsers"
original: "https://core.telegram.org/type/messages.InvitedUsers"
section: ref
description: "Contains info about successfully or unsuccessfully invited » users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.InvitedUsers","url":"/type/messages.InvitedUsers/"}]
layout: layout.njk
---

# messages.InvitedUsers

Contains info about successfully or unsuccessfully [invited »](/api/invites/#direct-invites) users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.invitedUsers/">messages.invitedUsers</a>#7f5defa6 updates:<a href="/type/Updates/">Updates</a> missing_invitees:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MissingInvitee/">MissingInvitee</a>&gt; = <a href="/type/messages.InvitedUsers/" class="current_page_link">messages.InvitedUsers</a>;

---functions---

<a href="/method/messages.addChatUser/">messages.addChatUser</a>#cbc6d107 chat_id:<a href="/type/long/">long</a> user_id:<a href="/type/InputUser/">InputUser</a> fwd_limit:<a href="/type/int/">int</a> = <a href="/type/messages.InvitedUsers/" class="current_page_link">messages.InvitedUsers</a>;
<a href="/method/messages.createChat/">messages.createChat</a>#92ceddd4 flags:<a href="/type/%23/">#</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; title:<a href="/type/string/">string</a> ttl_period:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.InvitedUsers/" class="current_page_link">messages.InvitedUsers</a>;

<a href="/method/channels.inviteToChannel/">channels.inviteToChannel</a>#c9e33d54 channel:<a href="/type/InputChannel/">InputChannel</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/messages.InvitedUsers/" class="current_page_link">messages.InvitedUsers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.invitedUsers/">messages.invitedUsers</a></td><td>Contains info about successfully or unsuccessfully <a href="/api/invites/#direct-invites">invited »</a> users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.addChatUser/">messages.addChatUser</a></td><td>Adds a user to a chat and sends a service message on it.</td></tr><tr><td><a href="/method/messages.createChat/">messages.createChat</a></td><td>Creates a new chat.</td></tr><tr><td><a href="/method/channels.inviteToChannel/">channels.inviteToChannel</a></td><td>Invite users to a channel/supergroup</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
