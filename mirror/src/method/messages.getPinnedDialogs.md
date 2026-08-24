---
title: "messages.getPinnedDialogs"
original: "https://core.telegram.org/method/messages.getPinnedDialogs"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPinnedDialogs","url":"/method/messages.getPinnedDialogs/"}]
layout: layout.njk
---

# messages.getPinnedDialogs

Get pinned dialogs

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.peerDialogs/">messages.peerDialogs</a>#3371c354 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/messages.PeerDialogs/">messages.PeerDialogs</a>;
---functions---
<a href="/method/messages.getPinnedDialogs/" class="current_page_link">messages.getPinnedDialogs</a>#d6b94df2 folder_id:<a href="/type/int/">int</a> = <a href="/type/messages.PeerDialogs/">messages.PeerDialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr></tbody></table>

### Result

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FOLDER_ID_INVALID</td><td>Invalid folder ID.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
