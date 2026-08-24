---
title: "messages.editChatAdmin"
original: "https://core.telegram.org/method/messages.editChatAdmin"
section: ref
description: "Make a user admin in a basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editChatAdmin","url":"/method/messages.editChatAdmin/"}]
layout: layout.njk
---

# messages.editChatAdmin

Make a user admin in a [basic group](/api/channel/#basic-groups).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.editChatAdmin/" class="current_page_link">messages.editChatAdmin</a>#a85bd1c2 chat_id:<a href="/type/long/">long</a> user_id:<a href="/type/InputUser/">InputUser</a> is_admin:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The ID of the group</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user to make admin</td></tr><tr><td><strong>is_admin</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to make them admin</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>400</td><td>USER_NOT_PARTICIPANT</td><td>You're not a member of this supergroup/channel.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
