---
title: "channels.updateUsername"
original: "https://core.telegram.org/method/channels.updateUsername"
section: ref
description: "Change or remove the username of a supergroup/channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.updateUsername","url":"/method/channels.updateUsername/"}]
layout: layout.njk
---

# channels.updateUsername

Change or remove the username of a supergroup/channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.updateUsername/" class="current_page_link">channels.updateUsername</a>#3514b3de channel:<a href="/type/InputChannel/">InputChannel</a> username:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New username, pass an empty string to remove the username</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>You're admin of too many public channels, make some channels private to change the username of this channel.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>The username was not modified.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>The specified username can be purchased on <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>
