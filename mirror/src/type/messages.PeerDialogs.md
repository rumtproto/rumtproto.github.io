---
title: "Messages.PeerDialogs"
original: "https://core.telegram.org/type/messages.PeerDialogs"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.PeerDialogs","url":"/type/messages.PeerDialogs/"}]
layout: layout.njk
---

# Messages.PeerDialogs

List of dialogs

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.peerDialogs/">messages.peerDialogs</a>#3371c354 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/messages.PeerDialogs/" class="current_page_link">messages.PeerDialogs</a>;

---functions---

<a href="/method/messages.getPeerDialogs/">messages.getPeerDialogs</a>#e470bcfd peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputDialogPeer/">InputDialogPeer</a>&gt; = <a href="/type/messages.PeerDialogs/" class="current_page_link">messages.PeerDialogs</a>;
<a href="/method/messages.getPinnedDialogs/">messages.getPinnedDialogs</a>#d6b94df2 folder_id:<a href="/type/int/">int</a> = <a href="/type/messages.PeerDialogs/" class="current_page_link">messages.PeerDialogs</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.peerDialogs/">messages.peerDialogs</a></td><td>Dialog info of multiple peers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getPeerDialogs/">messages.getPeerDialogs</a></td><td>Get dialog info of specified peers</td></tr><tr><td><a href="/method/messages.getPinnedDialogs/">messages.getPinnedDialogs</a></td><td>Get pinned dialogs</td></tr></tbody></table>
