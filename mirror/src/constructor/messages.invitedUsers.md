---
title: "messages.invitedUsers"
original: "https://core.telegram.org/constructor/messages.invitedUsers"
section: ref
description: "Contains info about successfully or unsuccessfully invited » users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.invitedUsers","url":"/constructor/messages.invitedUsers/"}]
layout: layout.njk
---

# messages.invitedUsers

Contains info about successfully or unsuccessfully [invited »](/api/invites/#direct-invites) users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.invitedUsers/" class="current_page_link">messages.invitedUsers</a>#7f5defa6 updates:<a href="/type/Updates/">Updates</a> missing_invitees:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MissingInvitee/">MissingInvitee</a>&gt; = <a href="/type/messages.InvitedUsers/">messages.InvitedUsers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>updates</strong></td><td style="text-align: center;"><a href="/type/Updates/">Updates</a></td><td>List of updates about successfully invited users (and eventually info about the created group)</td></tr><tr><td><strong>missing_invitees</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MissingInvitee/">MissingInvitee</a>&gt;</td><td>A list of users that could not be invited, along with the reason why they couldn't be invited.</td></tr></tbody></table>

### Type

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
