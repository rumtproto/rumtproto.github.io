---
title: "users.getFullUser"
original: "https://core.telegram.org/method/users.getFullUser"
section: ref
description: "Returns extended user info by ID."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.getFullUser","url":"/method/users.getFullUser/"}]
layout: layout.njk
---

# users.getFullUser

Returns extended user info by ID.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/users.userFull/">users.userFull</a>#3b6d152e full_user:<a href="/type/UserFull/">UserFull</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/users.UserFull/">users.UserFull</a>;
---functions---
<a href="/method/users.getFullUser/" class="current_page_link">users.getFullUser</a>#b60f5918 id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/users.UserFull/">users.UserFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID</td></tr></tbody></table>

### Result

[users.UserFull](/type/users.UserFull/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>
