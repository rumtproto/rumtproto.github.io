---
title: "messages.SavedDialogs"
original: "https://core.telegram.org/type/messages.SavedDialogs"
section: ref
description: "Represents some saved message dialogs »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SavedDialogs","url":"/type/messages.SavedDialogs/"}]
layout: layout.njk
---

# messages.SavedDialogs

Represents some [saved message dialogs »](/api/saved-messages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedDialogs/">messages.savedDialogs</a>#f83ae221 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsSlice/">messages.savedDialogsSlice</a>#44ba9dd9 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsNotModified/">messages.savedDialogsNotModified</a>#c01f6fe8 count:<a href="/type/int/">int</a> = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;

---functions---

<a href="/method/messages.getSavedDialogs/">messages.getSavedDialogs</a>#1e91fc99 flags:<a href="/type/%23/">#</a> exclude_pinned:flags.0?true parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> offset_date:<a href="/type/int/">int</a> offset_id:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;
<a href="/method/messages.getPinnedSavedDialogs/">messages.getPinnedSavedDialogs</a>#d63d94e0 = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;
<a href="/method/messages.getSavedDialogsByID/">messages.getSavedDialogsByID</a>#6f6f9c96 flags:<a href="/type/%23/">#</a> parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/messages.SavedDialogs/" class="current_page_link">messages.SavedDialogs</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedDialogs/">messages.savedDialogs</a></td><td>Represents some <a href="/api/saved-messages/">saved message dialogs »</a>.</td></tr><tr><td><a href="/constructor/messages.savedDialogsSlice/">messages.savedDialogsSlice</a></td><td>Incomplete list of <a href="/api/saved-messages/">saved message dialogs »</a> with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.savedDialogsNotModified/">messages.savedDialogsNotModified</a></td><td>The saved dialogs haven't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedDialogs/">messages.getSavedDialogs</a></td><td>Returns the current <a href="/api/saved-messages/">saved dialog list »</a> or <a href="/api/monoforum/">monoforum topic list »</a>.</td></tr><tr><td><a href="/method/messages.getPinnedSavedDialogs/">messages.getPinnedSavedDialogs</a></td><td>Get pinned <a href="/api/saved-messages/">saved dialogs, see here »</a> for more info.</td></tr><tr><td><a href="/method/messages.getSavedDialogsByID/">messages.getSavedDialogsByID</a></td><td>Obtain information about specific <a href="/api/saved-messages/#saved-message-dialogs">saved message dialogs »</a> or <a href="/api/monoforum/">monoforum topics »</a>.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
