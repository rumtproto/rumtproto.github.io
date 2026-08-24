---
title: "messages.getSavedDialogsByID"
original: "https://core.telegram.org/method/messages.getSavedDialogsByID"
section: ref
description: "Obtain information about specific saved message dialogs » or monoforum topics »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedDialogsByID","url":"/method/messages.getSavedDialogsByID/"}]
layout: layout.njk
---

# messages.getSavedDialogsByID

Obtain information about specific [saved message dialogs »](/api/saved-messages/#saved-message-dialogs) or [monoforum topics »](/api/monoforum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedDialogs/">messages.savedDialogs</a>#f83ae221 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsSlice/">messages.savedDialogsSlice</a>#44ba9dd9 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsNotModified/">messages.savedDialogsNotModified</a>#c01f6fe8 count:<a href="/type/int/">int</a> = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
---functions---
<a href="/method/messages.getSavedDialogsByID/" class="current_page_link">messages.getSavedDialogsByID</a>#6f6f9c96 flags:<a href="/type/%23/">#</a> parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, fetches <a href="/api/monoforum/">monoforum topics »</a>, otherwise fetches <a href="/api/saved-messages/#saved-message-dialogs">saved message dialogs »</a>.</td></tr><tr><td><strong>ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>IDs of dialogs (topics) to fetch.</td></tr></tbody></table>

### Result

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Only users can use this method

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
