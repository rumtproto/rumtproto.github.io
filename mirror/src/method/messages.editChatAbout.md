---
title: "messages.editChatAbout"
original: "https://core.telegram.org/method/messages.editChatAbout"
section: ref
description: "Edit the description of a group/supergroup/channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editChatAbout","url":"/method/messages.editChatAbout/"}]
layout: layout.njk
---

# messages.editChatAbout

Edit the description of a [group/supergroup/channel](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.editChatAbout/" class="current_page_link">messages.editChatAbout</a>#def60797 peer:<a href="/type/InputPeer/">InputPeer</a> about:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The <a href="/api/channel/">group/supergroup/channel</a>.</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The new description</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ABOUT_NOT_MODIFIED</td><td>About text has not changed.</td></tr><tr><td>400</td><td>CHAT_ABOUT_TOO_LONG</td><td>Chat about too long.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
