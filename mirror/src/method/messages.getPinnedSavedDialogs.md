---
title: "messages.getPinnedSavedDialogs"
original: "https://core.telegram.org/method/messages.getPinnedSavedDialogs"
section: ref
description: "Get pinned saved dialogs, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPinnedSavedDialogs","url":"/method/messages.getPinnedSavedDialogs/"}]
layout: layout.njk
---

# messages.getPinnedSavedDialogs

Get pinned [saved dialogs, see here »](/api/saved-messages/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedDialogs/">messages.savedDialogs</a>#f83ae221 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsSlice/">messages.savedDialogsSlice</a>#44ba9dd9 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsNotModified/">messages.savedDialogsNotModified</a>#c01f6fe8 count:<a href="/type/int/">int</a> = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
---functions---
<a href="/method/messages.getPinnedSavedDialogs/" class="current_page_link">messages.getPinnedSavedDialogs</a>#d63d94e0 = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Only users can use this method

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
